const pool = require('../../config/db-config');

// Inicio de sesión


const sessionUsuario = async (req, res) => {
    try {
        const idUsuario = req.params.idUsuario;
        const nombre_usuario = req.params.nombre_usuario;

        // consulta los datos del usuario
        const dataSession = await pool.query(
            'SELECT * FROM administracion.session as s INNER JOIN administracion.usuarios as u ON s.id_usuario = u.id_usuario WHERE u.id_usuario = $1 AND u.usuario_nombre=$2 AND s.estado_conexion = true',
            [idUsuario,nombre_usuario]);
        // guarda los datos de la session y a la vista. 
       
        if(dataSession.rowCount === 0){
            res.render('404',{titulo: 'error'}) 
        }else{
            const saveSession = dataSession.rows[0]
            res.render('dashboard', {
                titulo: 'dashboard',
                datos: saveSession
            });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};




module.exports = {
    sessionUsuario,
    
}