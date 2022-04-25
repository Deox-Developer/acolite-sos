const pool = require("../../config/db-config");


// Para crear un nuevo auto
const paginaRegistrarVehiculo = async (req, res) => {
    try {
        const {session,tipoVehiculo} = req.body;
        const idSession = req.params.idSession;
        const nombre_usuario = req.params.nombre_usuario;
        console.log(session,idSession,nombre_usuario);
        res.render('registrar-vehiculo',{
            titulo: 'Registrar vehiculo'
        });

        switch (tipoVehiculo) {
            case 'auto':
              console.log('tu vehiculo es un auto');
              break;
            case 'moto':
                console.log('tu vehiculo es un moto');
              break;
            case 'camion':
                console.log('tu vehiculo es un camion');
              break;
            case 'bus':
                console.log('tu vehiculo es un bus');
              break;
            case 'trailer':
                console.log('tu vehiculo es un trailer');
                break;
            case 'bicicleta':
                console.log('tu vehiculo es un bicicleta');
              break;
            default:
              console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
          }
          
          console.log("¿Hay algo más que te quisiera consultar?");

    } catch (error) {
        
    }
};



module.exports ={
    paginaRegistrarVehiculo,
};