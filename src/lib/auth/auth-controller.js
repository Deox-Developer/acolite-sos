const pool = require('../../config/db-config');
const bcrypt = require('bcrypt');


// passport -> login.



const iniciarSession = async (req, res) => {
    try {
        res.render('login');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const validacionUsuario = async (req, res) => {
    try {
        const { email, password } = req.body;
        const muestraClave = await bcrypt.compare(password,10);
        const response = await pool.query(
            "SELECT * FROM administracion.usuarios WHERE usuario_email = $1 AND password = $2 AND estado_cuenta = true",
            [email, muestraClave]
        );
        console.log(response.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    iniciarSession,
    validacionUsuario
}
