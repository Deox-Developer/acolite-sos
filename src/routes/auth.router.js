const {Router} =require('express');
const router = Router();

const{loginPage,datosIngreso,logOut}=require('../controllers/administracion/auth.controller');

router.get('/login',loginPage);
router.post('/login', datosIngreso);
router.post('/logOut', logOut);

module.exports = router;