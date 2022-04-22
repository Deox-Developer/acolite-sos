const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1309',
    database: 'acoliteDB',
    port:'5432'
});

module.exports = pool;