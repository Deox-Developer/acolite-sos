// Crea la página de inicio

const home = async (req, res) => {
    try {
        res.render('home');
    } catch (error) {
        
        res.status(500).json({ error: error.message });
    }
}





/// nosotros

const nosotros = async (req, res) => {
    try {
        res.render('nosotros');
    } catch (error) {
        
        res.status(500).json({ error: error.message });
    }
}



module.exports =  {
    home,
    nosotros
}
