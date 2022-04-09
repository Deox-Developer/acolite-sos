const express = require('express');
const morgan = require('morgan');
const hbs = require('hbs')

//Inicialización de express
const app = express();

//Configuraciones
app.set('port', process.env.PORT || 8080);
hbs.registerPartials(__dirname + '/src/views/partials', function (err) { });
app.set('view engine', 'hbs');
app.set("views", __dirname + "/src/views");

app.use(express.static(__dirname + "/src/public"));

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extends: true }));


//Routes 
app.use(require('./src/routes/usuario.router'));
app.use(require('./src/routes/auth.router'));


// Index
app.get('/',(req, res)=>{res.render('index',{titulo: 'Home'})})

// Index
app.get('/',(req, res)=>{res.render('index',{titulo: 'Home'})})


//Iniciar Server
app.listen(app.get('port'), () => {
    console.log(`Bienvenido a la consola http://localhost:${app.get("port")}`);
});


