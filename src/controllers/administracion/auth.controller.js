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
            'SELECT * FROM administracion.usuarios WHERE usuario_email = $1 AND password = $2 AND estado_cuenta = true',
            [email, password]);
        const idUsuario = response.rows[0];
        if (response.rowCount === 0) {
            res.render('login',
                {
                    alert: true,
                    mensaje: 'Este email no existe o tu clave es incorrecta'
                });
        } else {
            const sessionActiva = true;
            await pool.query(
                'INSERT INTO administracion.session(id_usuario, estado_conexion) VALUES ($1, $2)',
                [idUsuario.id_usuario, sessionActiva]
            );
            res.redirect('/dashboard/' + idUsuario.id_usuario);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const logOut = async (req, res) => {
    try {
        const { salir, contenido } = req.body;
        console.log(salir);
        const fecha_salida = new Date();
        await pool.query(
            'UPDATE administracion.session SET fecha_salida=$1, estado_conexion=$2 WHERE estado_conexion = $3 AND id_usuario = $4',
            [fecha_salida, false, salir, contenido]
        );
        res.redirect('/login')
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    datosIngreso,
    loginPage,
    logOut
}