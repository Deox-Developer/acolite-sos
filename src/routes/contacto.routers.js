const {Router} =require('express');
const router = Router();

const {contactoPage} = require('../controllers/contacto/contacto.controllers');


router.get('/contacto', contactoPage);

module.exports = router;