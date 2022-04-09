const {Router} =require('express');
const router = Router();

const {dashboard} = require('../controllers/dashboard/dashboard.controller');

router.get('/dashboard',dashboard);


module.exports = router;