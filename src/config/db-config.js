const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Zajo1554@',
    database: 'acolitedb',
    port:'5432'
});

module.exports = pool;