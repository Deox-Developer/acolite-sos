
CREATE DATABASE "acoliteDb"
	ENCODING = 'UTF8'
	LC_COLLATE = 'Spanish_Ecuador.1252'
	LC_CTYPE = 'Spanish_Ecuador.1252'
	TABLESPACE = pg_default
	OWNER = postgres;
-- ddl-end --


-- object: administracion | type: SCHEMA --
-- DROP SCHEMA IF EXISTS administracion CASCADE;
CREATE SCHEMA administracion;
-- ddl-end --
ALTER SCHEMA administracion OWNER TO postgres;
-- ddl-end --

-- object: clientes | type: SCHEMA --
-- DROP SCHEMA IF EXISTS clientes CASCADE;
CREATE SCHEMA clientes;
-- ddl-end --
ALTER SCHEMA clientes OWNER TO postgres;
-- ddl-end --

-- object: empleados | type: SCHEMA --
-- DROP SCHEMA IF EXISTS empleados CASCADE;
CREATE SCHEMA empleados;
-- ddl-end --
ALTER SCHEMA empleados OWNER TO postgres;
-- ddl-end --

-- object: informacion_general | type: SCHEMA --
-- DROP SCHEMA IF EXISTS informacion_general CASCADE;
CREATE SCHEMA informacion_general;
-- ddl-end --
ALTER SCHEMA informacion_general OWNER TO postgres;
-- ddl-end --

-- object: ordenes_generales | type: SCHEMA --
-- DROP SCHEMA IF EXISTS ordenes_generales CASCADE;
CREATE SCHEMA ordenes_generales;
-- ddl-end --
ALTER SCHEMA ordenes_generales OWNER TO postgres;
-- ddl-end --

-- object: vehiculos | type: SCHEMA --
-- DROP SCHEMA IF EXISTS vehiculos CASCADE;
CREATE SCHEMA vehiculos;
-- ddl-end --
ALTER SCHEMA vehiculos OWNER TO postgres;
-- ddl-end --

SET search_path TO pg_catalog,public,administracion,clientes,empleados,informacion_general,ordenes_generales,vehiculos;
-- ddl-end --

-- object: administracion.permisos_permiso_id_seq | type: SEQUENCE --
-- DROP SEQUENCE IF EXISTS administracion.permisos_permiso_id_seq CASCADE;
CREATE SEQUENCE administracion.permisos_permiso_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START WITH 1
	CACHE 1
	NO CYCLE
	OWNED BY NONE;

-- ddl-end --
ALTER SEQUENCE administracion.permisos_permiso_id_seq OWNER TO postgres;
-- ddl-end --

-- object: administracion.permisos | type: TABLE --
-- DROP TABLE IF EXISTS administracion.permisos CASCADE;
CREATE TABLE administracion.permisos (
	id_permiso integer NOT NULL DEFAULT nextval('administracion.permisos_permiso_id_seq'::regclass),
	nombre character varying NOT NULL,
	estado_permiso boolean NOT NULL,
	CONSTRAINT pk_permiso PRIMARY KEY (id_permiso)
);
-- ddl-end --
ALTER TABLE administracion.permisos OWNER TO postgres;
-- ddl-end --

-- object: administracion.roles_rol_id_seq | type: SEQUENCE --
-- DROP SEQUENCE IF EXISTS administracion.roles_rol_id_seq CASCADE;
CREATE SEQUENCE administracion.roles_rol_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START WITH 1
	CACHE 1
	NO CYCLE
	OWNED BY NONE;

-- ddl-end --
ALTER SEQUENCE administracion.roles_rol_id_seq OWNER TO postgres;
-- ddl-end --

-- object: administracion.roles_permisos_id_seq | type: SEQUENCE --
-- DROP SEQUENCE IF EXISTS administracion.roles_permisos_id_seq CASCADE;
CREATE SEQUENCE administracion.roles_permisos_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START WITH 1
	CACHE 1
	NO CYCLE
	OWNED BY NONE;

-- ddl-end --
ALTER SEQUENCE administracion.roles_permisos_id_seq OWNER TO postgres;
-- ddl-end --

-- object: administracion.roles_permisos | type: TABLE --
-- DROP TABLE IF EXISTS administracion.roles_permisos CASCADE;
CREATE TABLE administracion.roles_permisos (
	id integer NOT NULL DEFAULT nextval('administracion.roles_permisos_id_seq'::regclass),
	rol_id integer NOT NULL,
	permiso_id integer,
	CONSTRAINT pk_roles_permisos PRIMARY KEY (id)
);
-- ddl-end --
ALTER TABLE administracion.roles_permisos OWNER TO postgres;
-- ddl-end --

-- object: administracion.roles | type: TABLE --
-- DROP TABLE IF EXISTS administracion.roles CASCADE;
CREATE TABLE administracion.roles (
	id_rol integer NOT NULL DEFAULT nextval('administracion.roles_rol_id_seq'::regclass),
	nombre character varying NOT NULL,
	estado_rol boolean NOT NULL,
	CONSTRAINT pk_roles PRIMARY KEY (id_rol)
);
-- ddl-end --
COMMENT ON COLUMN administracion.roles.id_rol IS E'pk de la tabla roles';
-- ddl-end --
COMMENT ON CONSTRAINT pk_roles ON administracion.roles  IS E'pk tabla roles';
-- ddl-end --
ALTER TABLE administracion.roles OWNER TO postgres;
-- ddl-end --

-- object: administracion.roles_usuarios_id_seq | type: SEQUENCE --
-- DROP SEQUENCE IF EXISTS administracion.roles_usuarios_id_seq CASCADE;
CREATE SEQUENCE administracion.roles_usuarios_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START WITH 1
	CACHE 1
	NO CYCLE
	OWNED BY NONE;

-- ddl-end --
ALTER SEQUENCE administracion.roles_usuarios_id_seq OWNER TO postgres;
-- ddl-end --

-- object: administracion.roles_usuarios | type: TABLE --
-- DROP TABLE IF EXISTS administracion.roles_usuarios CASCADE;
CREATE TABLE administracion.roles_usuarios (
	id integer NOT NULL DEFAULT nextval('administracion.roles_usuarios_id_seq'::regclass),
	rol_id integer NOT NULL,
	usuario_id integer NOT NULL,
	CONSTRAINT roles_usuarios_pkey PRIMARY KEY (id)
);
-- ddl-end --
ALTER TABLE administracion.roles_usuarios OWNER TO postgres;
-- ddl-end --

-- object: administracion.usuario_persona_id_seq | type: SEQUENCE --
-- DROP SEQUENCE IF EXISTS administracion.usuario_persona_id_seq CASCADE;
CREATE SEQUENCE administracion.usuario_persona_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START WITH 1
	CACHE 1
	NO CYCLE
	OWNED BY NONE;

-- ddl-end --
ALTER SEQUENCE administracion.usuario_persona_id_seq OWNER TO postgres;
-- ddl-end --

-- object: administracion.usuarios_usuario_id_seq | type: SEQUENCE --
-- DROP SEQUENCE IF EXISTS administracion.usuarios_usuario_id_seq CASCADE;
CREATE SEQUENCE administracion.usuarios_usuario_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START WITH 1
	CACHE 1
	NO CYCLE
	OWNED BY NONE;

-- ddl-end --
ALTER SEQUENCE administracion.usuarios_usuario_id_seq OWNER TO postgres;
-- ddl-end --

-- object: administracion.usuarios | type: TABLE --
-- DROP TABLE IF EXISTS administracion.usuarios CASCADE;
CREATE TABLE administracion.usuarios (
	id_usuario integer NOT NULL DEFAULT nextval('administracion.usuarios_usuario_id_seq'::regclass),
	usuario_nombre character varying NOT NULL,
	usuario_email character varying NOT NULL,
	password character varying NOT NULL,
	fecha_creacion date NOT NULL DEFAULT CURRENT_TIMESTAMP,
	estado_activacion boolean NOT NULL DEFAULT false,
	fecha_modificacion date NOT NULL DEFAULT CURRENT_TIMESTAMP,
	nombre1 character varying NOT NULL,
	nombre2 character varying NOT NULL,
	apellido1 character varying NOT NULL,
	apellido2 character varying NOT NULL,
	tipo_identificacion integer NOT NULL,
	identificacion character varying NOT NULL,
	contacto character varying NOT NULL,
	estado_cuenta boolean NOT NULL DEFAULT false,
	CONSTRAINT usuarios_pkey PRIMARY KEY (id_usuario),
	CONSTRAINT usuarios_usuario_nombre_usuario_email_key UNIQUE (usuario_nombre,usuario_email),
	CONSTRAINT unico_cedula UNIQUE (identificacion)
);
-- ddl-end --
ALTER TABLE administracion.usuarios OWNER TO postgres;
-- ddl-end --

-- object: clientes.cliente_vehiculo_id_seq | type: SEQUENCE --
-- DROP SEQUENCE IF EXISTS clientes.cliente_vehiculo_id_seq CASCADE;
CREATE SEQUENCE clientes.cliente_vehiculo_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START WITH 1
	CACHE 1
	NO CYCLE
	OWNED BY NONE;

-- ddl-end --
ALTER SEQUENCE clientes.cliente_vehiculo_id_seq OWNER TO postgres;
-- ddl-end --

-- object: clientes.cliente_vehiculo | type: TABLE --
-- DROP TABLE IF EXISTS clientes.cliente_vehiculo CASCADE;
CREATE TABLE clientes.cliente_vehiculo (
	id integer NOT NULL DEFAULT nextval('clientes.cliente_vehiculo_id_seq'::regclass),
	vehiculo_id integer NOT NULL,
	cliente_id integer NOT NULL,
	CONSTRAINT cliente_vehiculo_pkey PRIMARY KEY (id)
);
-- ddl-end --
ALTER TABLE clientes.cliente_vehiculo OWNER TO postgres;
-- ddl-end --

-- object: clientes.clientes_cliente_id_seq | type: SEQUENCE --
-- DROP SEQUENCE IF EXISTS clientes.clientes_cliente_id_seq CASCADE;
CREATE SEQUENCE clientes.clientes_cliente_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START WITH 1
	CACHE 1
	NO CYCLE
	OWNED BY NONE;

-- ddl-end --
ALTER SEQUENCE clientes.clientes_cliente_id_seq OWNER TO postgres;
-- ddl-end --

-- object: clientes.clientes | type: TABLE --
-- DROP TABLE IF EXISTS clientes.clientes CASCADE;
CREATE TABLE clientes.clientes (
	id_cliente integer NOT NULL DEFAULT nextval('clientes.clientes_cliente_id_seq'::regclass),
	id_usuario integer NOT NULL,
	CONSTRAINT clientes_pkey PRIMARY KEY (id_cliente)
);
-- ddl-end --
ALTER TABLE clientes.clientes OWNER TO postgres;
-- ddl-end --

-- object: empleados.empleados_empleado_id_seq | type: SEQUENCE --
-- DROP SEQUENCE IF EXISTS empleados.empleados_empleado_id_seq CASCADE;
CREATE SEQUENCE empleados.empleados_empleado_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START WITH 1
	CACHE 1
	NO CYCLE
	OWNED BY NONE;

-- ddl-end --
ALTER SEQUENCE empleados.empleados_empleado_id_seq OWNER TO postgres;
-- ddl-end --

-- object: empleados.empleados | type: TABLE --
-- DROP TABLE IF EXISTS empleados.empleados CASCADE;
CREATE TABLE empleados.empleados (
	id_empleado integer NOT NULL DEFAULT nextval('empleados.empleados_empleado_id_seq'::regclass),
	id_usuario integer NOT NULL,
	CONSTRAINT empleados_pkey PRIMARY KEY (id_empleado)
);
-- ddl-end --
ALTER TABLE empleados.empleados OWNER TO postgres;
-- ddl-end --

-- object: informacion_general.usuarios_personas_persona_id_seq | type: SEQUENCE --
-- DROP SEQUENCE IF EXISTS informacion_general.usuarios_personas_persona_id_seq CASCADE;
CREATE SEQUENCE informacion_general.usuarios_personas_persona_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START WITH 1
	CACHE 1
	NO CYCLE
	OWNED BY NONE;

-- ddl-end --
ALTER SEQUENCE informacion_general.usuarios_personas_persona_id_seq OWNER TO postgres;
-- ddl-end --

-- object: informacion_general.tipo_identificacion_id_seq | type: SEQUENCE --
-- DROP SEQUENCE IF EXISTS informacion_general.tipo_identificacion_id_seq CASCADE;
CREATE SEQUENCE informacion_general.tipo_identificacion_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START WITH 1
	CACHE 1
	NO CYCLE
	OWNED BY NONE;

-- ddl-end --
ALTER SEQUENCE informacion_general.tipo_identificacion_id_seq OWNER TO postgres;
-- ddl-end --

-- object: informacion_general.tipo_identificacion | type: TABLE --
-- DROP TABLE IF EXISTS informacion_general.tipo_identificacion CASCADE;
CREATE TABLE informacion_general.tipo_identificacion (
	id integer NOT NULL DEFAULT nextval('informacion_general.tipo_identificacion_id_seq'::regclass),
	nombre character varying NOT NULL,
	CONSTRAINT tipo_identificacion_nombre_key UNIQUE (nombre),
	CONSTRAINT tipo_identificacion_pkey PRIMARY KEY (id)
);
-- ddl-end --
ALTER TABLE informacion_general.tipo_identificacion OWNER TO postgres;
-- ddl-end --

-- object: ordenes_generales.estado_reparacion_id_seq | type: SEQUENCE --
-- DROP SEQUENCE IF EXISTS ordenes_generales.estado_reparacion_id_seq CASCADE;
CREATE SEQUENCE ordenes_generales.estado_reparacion_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START WITH 1
	CACHE 1
	NO CYCLE
	OWNED BY NONE;

-- ddl-end --
ALTER SEQUENCE ordenes_generales.estado_reparacion_id_seq OWNER TO postgres;
-- ddl-end --

-- object: ordenes_generales.estado_reparacion | type: TABLE --
-- DROP TABLE IF EXISTS ordenes_generales.estado_reparacion CASCADE;
CREATE TABLE ordenes_generales.estado_reparacion (
	id integer NOT NULL DEFAULT nextval('ordenes_generales.estado_reparacion_id_seq'::regclass),
	nombre character varying NOT NULL,
	CONSTRAINT estado_reparacion_nombre_key UNIQUE (nombre),
	CONSTRAINT estado_reparacion_pkey PRIMARY KEY (id)
);
-- ddl-end --
ALTER TABLE ordenes_generales.estado_reparacion OWNER TO postgres;
-- ddl-end --

-- object: ordenes_generales.orden_servicios_orden_id_seq | type: SEQUENCE --
-- DROP SEQUENCE IF EXISTS ordenes_generales.orden_servicios_orden_id_seq CASCADE;
CREATE SEQUENCE ordenes_generales.orden_servicios_orden_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START WITH 1
	CACHE 1
	NO CYCLE
	OWNED BY NONE;

-- ddl-end --
ALTER SEQUENCE ordenes_generales.orden_servicios_orden_id_seq OWNER TO postgres;
-- ddl-end --

-- object: ordenes_generales.orden_servicios | type: TABLE --
-- DROP TABLE IF EXISTS ordenes_generales.orden_servicios CASCADE;
CREATE TABLE ordenes_generales.orden_servicios (
	orden_id integer NOT NULL DEFAULT nextval('ordenes_generales.orden_servicios_orden_id_seq'::regclass),
	cliente_id integer NOT NULL,
	empleado_id integer NOT NULL,
	cliente_vehiculo_id integer NOT NULL,
	fecha_creacion date NOT NULL DEFAULT CURRENT_TIMESTAMP,
	fecha_entrega date NOT NULL DEFAULT CURRENT_TIMESTAMP,
	estado_reparacion integer NOT NULL,
	calificacion_empleado numeric(1,0),
	calificacion_cliente numeric(1,0),
	estado_orden boolean NOT NULL DEFAULT false,
	CONSTRAINT orden_servicios_pkey PRIMARY KEY (orden_id)
);
-- ddl-end --
ALTER TABLE ordenes_generales.orden_servicios OWNER TO postgres;
-- ddl-end --

-- object: vehiculos.tipo_vehiculo_id_seq | type: SEQUENCE --
-- DROP SEQUENCE IF EXISTS vehiculos.tipo_vehiculo_id_seq CASCADE;
CREATE SEQUENCE vehiculos.tipo_vehiculo_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START WITH 1
	CACHE 1
	NO CYCLE
	OWNED BY NONE;

-- ddl-end --
ALTER SEQUENCE vehiculos.tipo_vehiculo_id_seq OWNER TO postgres;
-- ddl-end --

-- object: vehiculos.tipo_vehiculo | type: TABLE --
-- DROP TABLE IF EXISTS vehiculos.tipo_vehiculo CASCADE;
CREATE TABLE vehiculos.tipo_vehiculo (
	id integer NOT NULL DEFAULT nextval('vehiculos.tipo_vehiculo_id_seq'::regclass),
	nombre character varying NOT NULL,
	CONSTRAINT tipo_vehiculo_nombre_key UNIQUE (nombre),
	CONSTRAINT tipo_vehiculo_pkey PRIMARY KEY (id)
);
-- ddl-end --
ALTER TABLE vehiculos.tipo_vehiculo OWNER TO postgres;
-- ddl-end --

-- object: vehiculos.vehiculos_vehiculo_id_seq | type: SEQUENCE --
-- DROP SEQUENCE IF EXISTS vehiculos.vehiculos_vehiculo_id_seq CASCADE;
CREATE SEQUENCE vehiculos.vehiculos_vehiculo_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START WITH 1
	CACHE 1
	NO CYCLE
	OWNED BY NONE;

-- ddl-end --
ALTER SEQUENCE vehiculos.vehiculos_vehiculo_id_seq OWNER TO postgres;
-- ddl-end --

-- object: vehiculos.vehiculos | type: TABLE --
-- DROP TABLE IF EXISTS vehiculos.vehiculos CASCADE;
CREATE TABLE vehiculos.vehiculos (
	id_vehiculo integer NOT NULL DEFAULT nextval('vehiculos.vehiculos_vehiculo_id_seq'::regclass),
	"tipo_vehículo" integer NOT NULL,
	marca character varying NOT NULL,
	placa character varying NOT NULL,
	chasis character varying NOT NULL,
	color character varying NOT NULL,
	modelo character varying NOT NULL,
	CONSTRAINT vehiculos_chasis_key UNIQUE (chasis),
	CONSTRAINT vehiculos_pkey PRIMARY KEY (id_vehiculo),
	CONSTRAINT vehiculos_placa_key UNIQUE (placa)
);
-- ddl-end --
ALTER TABLE vehiculos.vehiculos OWNER TO postgres;
-- ddl-end --

-- object: fk_permiso_id | type: CONSTRAINT --
-- ALTER TABLE administracion.roles_permisos DROP CONSTRAINT IF EXISTS fk_permiso_id CASCADE;
ALTER TABLE administracion.roles_permisos ADD CONSTRAINT fk_permiso_id FOREIGN KEY (permiso_id)
REFERENCES administracion.permisos (id_permiso) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: fk_roles | type: CONSTRAINT --
-- ALTER TABLE administracion.roles_permisos DROP CONSTRAINT IF EXISTS fk_roles CASCADE;
ALTER TABLE administracion.roles_permisos ADD CONSTRAINT fk_roles FOREIGN KEY (rol_id)
REFERENCES administracion.roles (id_rol) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: fk_role | type: CONSTRAINT --
-- ALTER TABLE administracion.roles_usuarios DROP CONSTRAINT IF EXISTS fk_role CASCADE;
ALTER TABLE administracion.roles_usuarios ADD CONSTRAINT fk_role FOREIGN KEY (rol_id)
REFERENCES administracion.roles (id_rol) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: fk_usuario | type: CONSTRAINT --
-- ALTER TABLE administracion.roles_usuarios DROP CONSTRAINT IF EXISTS fk_usuario CASCADE;
ALTER TABLE administracion.roles_usuarios ADD CONSTRAINT fk_usuario FOREIGN KEY (usuario_id)
REFERENCES administracion.usuarios (id_usuario) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: fk_tipo_identificacion | type: CONSTRAINT --
-- ALTER TABLE administracion.usuarios DROP CONSTRAINT IF EXISTS fk_tipo_identificacion CASCADE;
ALTER TABLE administracion.usuarios ADD CONSTRAINT fk_tipo_identificacion FOREIGN KEY (tipo_identificacion)
REFERENCES informacion_general.tipo_identificacion (id) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: cliente_vehiculo_cliente_id_fkey | type: CONSTRAINT --
-- ALTER TABLE clientes.cliente_vehiculo DROP CONSTRAINT IF EXISTS cliente_vehiculo_cliente_id_fkey CASCADE;
ALTER TABLE clientes.cliente_vehiculo ADD CONSTRAINT cliente_vehiculo_cliente_id_fkey FOREIGN KEY (cliente_id)
REFERENCES clientes.clientes (id_cliente) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: cliente_vehiculo_vehiculo_id_fkey | type: CONSTRAINT --
-- ALTER TABLE clientes.cliente_vehiculo DROP CONSTRAINT IF EXISTS cliente_vehiculo_vehiculo_id_fkey CASCADE;
ALTER TABLE clientes.cliente_vehiculo ADD CONSTRAINT cliente_vehiculo_vehiculo_id_fkey FOREIGN KEY (vehiculo_id)
REFERENCES vehiculos.vehiculos (id_vehiculo) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: fk_usuario | type: CONSTRAINT --
-- ALTER TABLE clientes.clientes DROP CONSTRAINT IF EXISTS fk_usuario CASCADE;
ALTER TABLE clientes.clientes ADD CONSTRAINT fk_usuario FOREIGN KEY (id_usuario)
REFERENCES administracion.usuarios (id_usuario) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: fk_usuario | type: CONSTRAINT --
-- ALTER TABLE empleados.empleados DROP CONSTRAINT IF EXISTS fk_usuario CASCADE;
ALTER TABLE empleados.empleados ADD CONSTRAINT fk_usuario FOREIGN KEY (id_usuario)
REFERENCES administracion.usuarios (id_usuario) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: orden_servicios_cliente_id_fkey | type: CONSTRAINT --
-- ALTER TABLE ordenes_generales.orden_servicios DROP CONSTRAINT IF EXISTS orden_servicios_cliente_id_fkey CASCADE;
ALTER TABLE ordenes_generales.orden_servicios ADD CONSTRAINT orden_servicios_cliente_id_fkey FOREIGN KEY (cliente_id)
REFERENCES clientes.clientes (id_cliente) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: orden_servicios_cliente_vehiculo_id_fkey | type: CONSTRAINT --
-- ALTER TABLE ordenes_generales.orden_servicios DROP CONSTRAINT IF EXISTS orden_servicios_cliente_vehiculo_id_fkey CASCADE;
ALTER TABLE ordenes_generales.orden_servicios ADD CONSTRAINT orden_servicios_cliente_vehiculo_id_fkey FOREIGN KEY (cliente_vehiculo_id)
REFERENCES clientes.cliente_vehiculo (id) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: orden_servicios_empleado_id_fkey | type: CONSTRAINT --
-- ALTER TABLE ordenes_generales.orden_servicios DROP CONSTRAINT IF EXISTS orden_servicios_empleado_id_fkey CASCADE;
ALTER TABLE ordenes_generales.orden_servicios ADD CONSTRAINT orden_servicios_empleado_id_fkey FOREIGN KEY (empleado_id)
REFERENCES empleados.empleados (id_empleado) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: orden_servicios_estado_reparacion_fkey | type: CONSTRAINT --
-- ALTER TABLE ordenes_generales.orden_servicios DROP CONSTRAINT IF EXISTS orden_servicios_estado_reparacion_fkey CASCADE;
ALTER TABLE ordenes_generales.orden_servicios ADD CONSTRAINT orden_servicios_estado_reparacion_fkey FOREIGN KEY (estado_reparacion)
REFERENCES ordenes_generales.estado_reparacion (id) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: "vehiculos_tipo_vehículo_fkey" | type: CONSTRAINT --
-- ALTER TABLE vehiculos.vehiculos DROP CONSTRAINT IF EXISTS "vehiculos_tipo_vehículo_fkey" CASCADE;
ALTER TABLE vehiculos.vehiculos ADD CONSTRAINT "vehiculos_tipo_vehículo_fkey" FOREIGN KEY ("tipo_vehículo")
REFERENCES vehiculos.tipo_vehiculo (id) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --


