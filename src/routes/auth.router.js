const {Router} =require('express');
const router = Router();

const{loginPage,datosIngreso}=require('../controllers/administracion/auth.controller');

router.get('/login',loginPage);
router.post('/login', datosIngreso);

module.exports = router;