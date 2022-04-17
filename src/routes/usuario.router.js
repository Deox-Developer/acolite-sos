const {Router} =require('express');
const router = Router();

const {getUsuarios,getUsuarioById,crearUsuario, deletUsuario, updateUsuario,borradoLogico,registroUsuarioPage} = require('../controllers/administracion/usuarios.controller');

router.get('/registrar-usuario',registroUsuarioPage);
router.get('/usuarios', getUsuarios);
router.get('/usuarios/:idUsuario', getUsuarioById);
router.post('/registrar-usuario',crearUsuario);
router.delete('/usuarios/:usuario_id', deletUsuario);
router.put('/usuarios/:usuario_id',updateUsuario);
router.put('/usuarios/borradoLogico/:usuario_id',borradoLogico);


module.exports = router;