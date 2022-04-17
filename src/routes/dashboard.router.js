const {Router} =require('express');
const router = Router();

const {sessionUsuario,perfilUsuario,clienteVehiculo,nuevoCliente} = require('../controllers/dashboard/dashboard.controller');

router.get('/dashboard/perfil/:idUsuario/:nombre_usuario', sessionUsuario);
router.get('/dashboard/perfil-usuario/:idSession/:nombre_usuario',perfilUsuario);
router.get('/dashboard/cliente-vehiculo/:idSession/:nombre_usuario',clienteVehiculo);
router.post('/dashboard/cliente-vehiculo/registrar-cliente',nuevoCliente)


module.exports = router;