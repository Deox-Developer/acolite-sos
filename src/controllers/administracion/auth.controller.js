const pool = require("../../config/db-config");

const inicioSesion = async (req, res) => {
  try {
    res.render("login", { titulo: "login" });
  } catch (error) {
    res.render("error", { titulo: "error" });
  }
};

const validarUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;

    const totalUsuarios = await pool.query(
      "SELECT * FROM administracion.usuarios WHERE  usuario_email = $1 AND password = $2",
      [email,password]
    );

    if(totalUsuarios.rowCount === 0){
        res.render("login", { titulo: "login", alert: true, mensaje: 'Ups! Los datos no existen' });
    }else{
        const usuario = totalUsuarios.rows[0];
        if(usuario.estado_cuenta){
            var time = new Date();
            await pool.query('INSERT INTO administracion.session( id_usuario, fecha_ingreso,estado_conexion)VALUES ( $1, $2, true)',
            [usuario.id_usuario,time]);
            res.redirect('/dashboard/perfil/'+usuario.id_usuario+'/'+usuario.usuario_nombre);
        }else{
            res.render("login", { titulo: "login", alert: true, mensaje: 'Ups! Tu usario está inactivo\n activalo aquí' });
        }
    } 
  } catch (error) {
    res.render('404',{titulo: 'error'}) 
  }
};

const cerrarSesion = async (req, res) =>{
    const idSession = req.params.id_session;
    var time = new Date();
    const finSession = await pool.query(
        'UPDATE administracion.session SET  fecha_salida=$1, estado_conexion=false WHERE id_session = $2 AND estado_conexion = true',
        [time,idSession]
    );
    console.log(finSession.rowCount)
    if (finSession.rowCount) {
        res.redirect('/');
    }else{
        res.redirect('/error')
    }
};

module.exports = {
  inicioSesion,
  validarUsuario,
  cerrarSesion
};
