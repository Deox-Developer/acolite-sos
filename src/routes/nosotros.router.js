const {Router} =require('express');
const router = Router();

const {nosotrosPage} = require('../controllers/nosotros/nosotros.controllers');

router.get('/nosotros', nosotrosPage);

module.exports = router;