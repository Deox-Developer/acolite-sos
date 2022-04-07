const pool = require('../../config/db-config');



// envio a la pagina de login
const iniciarSession = async (req, res) => {
    try {
        res.render('login');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Validacion de datos recibidos en front
const validacionUsuario = async (req, res) => {
    try {
        const { email, password } = req.body;

        const response = await pool.query(
            'SELECT * FROM administracion.usuarios WHERE usuario_email = $1 AND password = $2 AND estado_cuenta = true',
            [email, password]);
        if (response.rowCount === 0) {
            // INICIO INCORRECTO -> V 1.0 mejorar
            console.log('datos incorrectos');
            res.render('registro');
        } else {
            // INICIO CORRECTO -> V 1.0 mejorar
            console.log('Inicio correcto');
            res.render('dashboard',response.rows);
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    iniciarSession,
    validacionUsuario
}
