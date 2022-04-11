const contactoPage = async (req, res) => {
    try {
        res.render('contacto', { titulo: 'contacto' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    contactoPage
}