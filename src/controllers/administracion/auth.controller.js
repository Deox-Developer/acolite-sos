const pool = require('../../config/db-config');

// Inicio de sesión
const loginPage = async(req, res)=>{
    try {
        res.render('login',{titulo: 'Login'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const datosIngreso = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email,password);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    datosIngreso,
    loginPage
}