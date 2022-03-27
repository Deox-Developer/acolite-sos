const {Router} =require('express');
const router = Router();

const {getUsuarios,getUsuarioById,crearUsuario, deletUsuario, updateUsuario,borradoLogico,registroUsuario} = require('../controllers/administracion/usuarios.controller');

router.get('/registro',registroUsuario);
router.get('/usuarios', getUsuarios);
router.get('/usuarios/:usuarioId', getUsuarioById);
router.post('/usuarios/crearUsuario',crearUsuario);
router.delete('/usuarios/:usuario_id', deletUsuario);
router.put('/usuarios/:usuario_id',updateUsuario);
router.put('/usuarios/borradoLogico/:usuario_id',borradoLogico);


module.exports = router;