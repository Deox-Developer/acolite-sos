const {Router} =require('express');
const router = Router();

const{inicioSesion,validarUsuario,cerrarSesion}=require('../controllers/administracion/auth.controller');

router.get('/login',inicioSesion);
router.post('/login',validarUsuario);
router.get('/logout/:id_session',cerrarSesion);

module.exports = router;