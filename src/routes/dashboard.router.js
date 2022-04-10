const {Router} =require('express');
const router = Router();

const {getUsuarioById} = require('../controllers/dashboard/dashboard.controller');


router.get('/dashboard/:idUsuario', getUsuarioById);

module.exports = router;