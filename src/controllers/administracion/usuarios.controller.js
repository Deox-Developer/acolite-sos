const pool = require('../../config/db-config');

//Register

const registroUsuarioPage = async (req, res) => {
    try {
        res.render('registrar-usuario');
    } catch (error) {

        res.status(500).json({ error: error.message });
    }
}

// Trae los usuarios

const getUsuarios = async (req, res) => {
    try {

        const response = await pool.query(
            'SELECT * FROM administracion.usuarios WHERE estado_cuenta = true');
        res.status(200).json(response.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Trae la información de el usuario_id

const getUsuarioById = async (req, res) => {
    try {
        const idUsuario = req.params.idUsuario;
        const response = await pool.query(
            'SELECT * FROM administracion.usuarios WHERE id_usuario = $1 AND estado_cuenta = true',
            [idUsuario]);
        res.render('dashboard', response.rows[0])
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear usuario

const crearUsuario = async (req, res) => {
    try {
        const { usuario_nombre, usuario_email, password, estado_cuenta } = req.body;
        const nuevoUsuario = await pool.query(
            'INSERT INTO administracion.usuarios (usuario_nombre, usuario_email, password, estado_cuenta) VALUES ($1,$2,$3,$4) RETURNING *'
            , [usuario_nombre, usuario_email, password, estado_cuenta]);
        const datosUsuario = nuevoUsuario.rows[0];
        await pool.query(
            'INSERT INTO administracion.session(id_usuario, estado_conexion) VALUES ($1, $2)',
            [datosUsuario.id_usuario, true]
        );
        res.redirect('/dashboard/'+datosUsuario.id_usuario)


    } catch (error) {
        res.status(500).render('registrar-usuario', { error: error.message });
    }
};

// Borrar usuario no usar -> aplicar authentication.js!

const deletUsuario = async (req, res) => {
    try {
        const usuario_id = req.params.usuario_id;
        const borradoFisico = await pool.query('DELETE FROM administracion.usuarios WHERE usuario_id =$1', [usuario_id]);
        console.log(borradoFisico);
        res.json(`Usuario ${usuario_id} eliminado con éxito.`)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Actualizar datos de usuario

const updateUsuario = async (req, res) => {
    try {
        const usuario_id = req.params.usuario_id;
        const { usuario_nombre, usuario_email, password } = req.body;
        const fecha_modificacion = new Date();
        const actualizacion_usuario = await pool.query(
            'UPDATE administracion.usuarios SET usuario_nombre = $1, usuario_email = $2, password = $3, fecha_modificacion = $4 WHERE usuario_id = $5',
            [usuario_nombre, usuario_email, password, fecha_modificacion.toDateString(), usuario_id]);
        console.log(actualizacion_usuario);
        res.json('Usuario modificado con éxito.');

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Borrado lógico

const borradoLogico = ('/', async (req, res) => {
    try {
        const usuario_id = req.params.usuario_id;
        const estado_cuenta = false;
        const borradoLogico = await pool.query(
            'UPDATE administracion.usuarios SET estado_cuenta = $1 WHERE usuario_id = $2',
            [estado_cuenta, usuario_id]);
        console.log(borradoLogico);
        res.json(`Usuario ${usuario_id} borrado con éxito.`)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Métodos exportados para ser usado en las rutas.

module.exports = {
    getUsuarios,
    getUsuarioById,
    crearUsuario,
    deletUsuario,
    updateUsuario,
    borradoLogico,
    registroUsuarioPage
}