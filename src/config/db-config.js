const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
<<<<<<< HEAD
    password: '1309',
=======
    password: '1234',
>>>>>>> Dylan-Lucio
    database: 'acoliteBD',
    port:'5432'
});

module.exports = pool;