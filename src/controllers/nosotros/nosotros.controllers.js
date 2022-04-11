const nosotrosPage = async (req, res) => {
    try {
        res.render('nosotros', { titulo: 'nosotros' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    nosotrosPage
}