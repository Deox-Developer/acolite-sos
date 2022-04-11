// const express = require('express')
// const {vistaPrincipal, vistaTables, vistaNotifications}= require('../controllers/dashboard/PageControllers')
// const router = express.Router()

// //const conexion = require ('../database/db')


// router.get('/homedashboard',vistaPrincipal)
// router.get('/tables',vistaTables)
// // router.get('/tables',(req , res)=>{

// //     conexion.query('SELECT *FROM usuarios', (error, results)=>{
// //         if (error) {
// //             throw error
// //         } else{
// //             res.render('tables',{results:results})
// //         }
// //     })
// // })
// router.get('/notifications',vistaNotifications)



// module.exports=router;


const {Router} =require('express');
const router = Router();

const {getUsuarioById} = require('../controllers/dashboard/dashboard.controller');

router.get('/dashboard/:idUsuario', getUsuarioById);

module.exports = router;