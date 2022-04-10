const pool = require('../../config/db-config');

// Inicio de sesión

const getUsuarioById = async (req, res) => {
    try {
        const idUsuario = req.params.idUsuario;
        // consulta los datos del usuario
        const response = await pool.query(
            'SELECT * FROM administracion.usuarios WHERE id_usuario = $1 AND estado_cuenta = true',
            [idUsuario]);
        // guarda los datos de la session y a la vista.    
        const session = await pool.query(
            'SELECT * FROM administracion.session WHERE id_usuario = $1 AND estado_conexion = true',
            [idUsuario]);
            
        res.render('dashboard', {
            titulo: 'dashboard',
            body: response.rows[0],
            session: session.rows[0]
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};




module.exports = {
    getUsuarioById
}