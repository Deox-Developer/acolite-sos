const {Router} =require('express');
const router = Router();



const {iniciarSession,validacionUsuario} = require('../lib/auth/auth-controller');

router.get('/login',iniciarSession);
router.post('/login',validacionUsuario);

module.exports = router;