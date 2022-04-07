const express = require('express');
const morgan = require('morgan');
const passport = require('passport');





//Inicialización de express
const app = express();

//Archivos estaticos
app.use(express.static(__dirname, + '/public'));


//Configuraciones
app.set('port', process.env.PORT || 8080);
app.set('view engine', 'ejs');
app.set('views',__dirname + '/src/views');


//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use(passport.initialize());

//Routes 
app.use(require('./src/routes/home-router'));
app.use(require('./src/routes/auth-router'))
app.use(require('./src/routes/usuario.router'));


//Iniciar Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});


