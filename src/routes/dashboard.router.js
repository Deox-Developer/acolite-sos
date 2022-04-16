const {Router} =require('express');
const router = Router();

const {sessionUsuario} = require('../controllers/dashboard/dashboard.controller');

router.get('/dashboard/perfil/:idUsuario/:nombre_usuario', sessionUsuario);


module.exports = router;