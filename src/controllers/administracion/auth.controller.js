const pool = require('../../config/db-config');

// Inicio de sesión
const loginPage = async (req, res) => {
    try {
        res.render('login', { titulo: 'Login' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const datosIngreso = async (req, res) => {
    try {
        const { email, password } = req.body;
        const response = await pool.query(
            'SELECT id_usuario FROM administracion.usuarios WHERE usuario_email = $1 AND password = $2 AND estado_cuenta = true',
            [email, password]);
        const idUsuario = response.rows[0];
        if (response.rowCount === 0) {
            res.render('login',
                {
                    alert: true,
                    mensaje: 'Este email no existe o tu clave es incorrecta'
                });
        } else {
            console.log(idUsuario.id_usuario);
            res.redirect('/dashboard/'+idUsuario.id_usuario);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    datosIngreso,
    loginPage
}