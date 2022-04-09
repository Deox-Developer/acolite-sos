const pool = require('../../config/db-config');

// Inicio de sesión
const dashboard = async (req, res) => {
    try {
        res.render('dashboard', { titulo: 'dashboard' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



module.exports = {
    dashboard  
}