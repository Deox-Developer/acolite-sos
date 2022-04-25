const {Router} =require('express');
const router = Router();

const {paginaRegistrarVehiculo} = require('../controllers/dashboard/agregarVehiculo.controller');


router.get('/dashboard/registrar-vehiculo/:idSession/:nombre_usuario',paginaRegistrarVehiculo);
router.post('/dashboard/registrar-vehiculo/:idSession/:nombre_usuario',paginaRegistrarVehiculo,);

module.exports = router;