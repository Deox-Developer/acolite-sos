const pool = require("../../config/db-config");

// Inicio de sesión

const sessionUsuario = async (req, res) => {
  try {
    const idUsuario = req.params.idUsuario;
    const nombre_usuario = req.params.nombre_usuario;

    // consulta los datos del usuario
    const dataSession = await pool.query(
      "SELECT * FROM administracion.session as s INNER JOIN administracion.usuarios as u ON s.id_usuario = u.id_usuario WHERE u.id_usuario = $1 AND u.usuario_nombre=$2 AND s.estado_conexion = true",
      [idUsuario, nombre_usuario]
    );
    // guarda los datos de la session y a la vista.

    if (dataSession.rowCount === 0) {
      res.render("404", { titulo: "error" });
    } else {
      const saveSession = dataSession.rows[0];
      res.render("dashboard", {
        titulo: "dashboard",
        datos: saveSession,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const perfilUsuario = async (req, res) => {
  try {
    const idSession = req.params.idSession;
    const nombre_usuario = req.params.nombre_usuario;
    const dataUsuario = await pool.query(
      "SELECT * FROM administracion.session as s INNER JOIN administracion.usuarios as u ON s.id_usuario = u.id_usuario  INNER JOIN informacion_general.tipo_identificacion as i ON u.tipo_identificacion = i.id WHERE s.id_session = $1 AND u.usuario_nombre= $2 AND s.estado_conexion = true",
      [idSession, nombre_usuario]
    );
    if (dataUsuario.rowCount === 0) {
      res.render("404", { titulo: "error" });
    } else {
      const saveUsuario = dataUsuario.rows[0];
      res.render("perfil-usuario", {
        titulo: "dashPerfilhboard",
        datos: saveUsuario,
        fecha_creacion: saveUsuario.fecha_ingreso.toLocaleString().slice(0, 9),
        fecha_modificacion: saveUsuario.fecha_modificacion
          .toLocaleString()
          .slice(0, 8),
      });
    }
  } catch (error) {
    res.render("404", { titulo: "error" });
  }
};

const clienteVehiculo = async (req, res) => {
  try {
    const idSession = req.params.idSession;
    const nombre_usuario = req.params.nombre_usuario;

    const usuario = await pool.query(
      "SELECT * FROM administracion.session as s INNER JOIN administracion.usuarios as u ON s.id_usuario = u.id_usuario  INNER JOIN informacion_general.tipo_identificacion as i ON u.tipo_identificacion = i.id WHERE s.id_session = $1 AND u.usuario_nombre= $2 AND s.estado_conexion = true",
      [idSession, nombre_usuario]
    );
    if (usuario.rowCount === 0) {
      console.log("Error no existe el usuario");
    } else {
      var datosUsuario = usuario.rows[0];
    
      const cliente = await pool.query(
        "SELECT * FROM clientes.clientes WHERE id_usuario = $1 AND estado = true",
        [datosUsuario.id_usuario]
      );
      if (cliente.rowCount === 0) {
        res.render("cliente-vehiculo", {
          titulo: "Registrar Cliente",
          registrarCliente: true,
          datos: datosUsuario,
        });
      } else {
        var datosCliente = cliente.rows[0];
        res.render("cliente-vehiculo", {
          titulo: "Registrar Cliente",
          registrarCliente: false,
          datos: datosUsuario,
          datosCliente: datosCliente,
          fecha_creacion: datosCliente.fecha_creacion
            .toLocaleString()
            .slice(0, 9),
          fecha_modificacion: datosCliente.fecha_modificacion
            .toLocaleString()
            .slice(0, 9),
        });
      }
    }
  } catch (error) {
    res.render("404", { titulo: "error" });
  }
};

const nuevoCliente = async (req, res) => {
  try {
    const { id_session } = req.body;
    const usuario = await pool.query(
      "SELECT * FROM administracion.session as s INNER JOIN administracion.usuarios as u ON s.id_usuario = u.id_usuario  INNER JOIN informacion_general.tipo_identificacion as i ON u.tipo_identificacion = i.id WHERE s.id_session = $1 AND s.estado_conexion = true",
      [id_session]
    );
    if (usuario.rowCount === 0) {
      var datosUsuario = usuario.rows[0];
      res.redirect(
        "/dashboard/perfil/" +
          datosUsuario.id_usuario +
          "/" +
          datosUsuario.usuario_nombre
      );
    } else {
      var datosUsuario = usuario.rows[0];
      const datosCliente = await pool.query(
        "INSERT INTO clientes.clientes(id_usuario, estado ) VALUES ( $1, true )",
        [datosUsuario.id_usuario]
      );
      if (datosCliente.rowCount === 0) {
        res.redirect(
          "/dashboard/perfil/" +
            datosUsuario.id_usuario +
            "/" +
            datosUsuario.usuario_nombre
        );
      } else {
        res.redirect(
          "/dashboard/cliente-vehiculo/" +
            datosUsuario.id_session +
            "/" +
            datosUsuario.usuario_nombre
        );
      }
    }
  } catch (error) {
    res.render("404", { titulo: "error" });
  }
};

const empleadoCliente = async (req, res) => {
  try {
    const idSession = req.params.idSession;
    const nombre_usuario = req.params.nombre_usuario;
    const usuario = await pool.query(
      "SELECT * FROM administracion.session as s INNER JOIN administracion.usuarios as u ON s.id_usuario = u.id_usuario  INNER JOIN informacion_general.tipo_identificacion as i ON u.tipo_identificacion = i.id WHERE s.id_session = $1 AND u.usuario_nombre= $2 AND s.estado_conexion = true",
      [idSession, nombre_usuario]
    );

    if (usuario.rowCount === 0) {
      console.log("Error no existe el usuario");
    } else {
      var datosUsuario = usuario.rows[0];
      const empleado = await pool.query(
        "SELECT * FROM empleados.empleados WHERE id_usuario = $1 AND estado = true",
        [datosUsuario.id_usuario]
      );
      if (empleado.rowCount === 0) {
        res.render("empleado", {
          titulo: "Empleado",
          registrarEmpleado: true,
          datos: datosUsuario,
        });
      } else {
        var datosEmpleado = empleado.rows[0];
        res.render("empleado", {
          titulo: "Empleado",
          registrarEmpleado: false,
          datos: datosUsuario,
          datosEmpleado: datosEmpleado,
          fecha_creacion: datosEmpleado.fecha_creacion
            .toLocaleString()
            .slice(0, 9),
          fecha_modificacion: datosEmpleado.fecha_modificacion
            .toLocaleString()
            .slice(0, 9),
        });
      }
    }
  } catch (error) {}
};

const nuevoEmpleado = async (req, res) => {
  try {
    const { id_session } = req.body;
    const usuario = await pool.query(
      "SELECT * FROM administracion.session as s INNER JOIN administracion.usuarios as u ON s.id_usuario = u.id_usuario  INNER JOIN informacion_general.tipo_identificacion as i ON u.tipo_identificacion = i.id WHERE s.id_session = $1 AND s.estado_conexion = true",
      [id_session]
    );
    if (usuario.rowCount === 0) {
      var datosUsuario = usuario.rows[0];
      res.redirect(
        "/dashboard/perfil/" +
          datosUsuario.id_usuario +
          "/" +
          datosUsuario.usuario_nombre
      );
    } else {
      var datosUsuario = usuario.rows[0];
      const datosEmpleado = await pool.query(
        "INSERT INTO empleados.empleados(id_usuario, estado ) VALUES ( $1, true )",
        [datosUsuario.id_usuario]
      );
      if (datosEmpleado.rowCount === 0) {
        res.redirect(
          "/dashboard/perfil/" +
            datosUsuario.id_usuario +
            "/" +
            datosUsuario.usuario_nombre
        );
      } else {
        res.redirect(
          "/dashboard/empleado/" +
            datosUsuario.id_session +
            "/" +
            datosUsuario.usuario_nombre
        );
      }
    }
  } catch (error) {

  }
};


module.exports = {
  sessionUsuario,
  perfilUsuario,
  clienteVehiculo,
  nuevoCliente,
  empleadoCliente,
  nuevoEmpleado,
};
