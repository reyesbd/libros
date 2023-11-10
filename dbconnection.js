const knex = require('knex');

const db = knex({
    client: 'mysql2',
    connection: {
        host: 'mysql', //Nombre del docker-compose service
        user: 'user_biblioteca',
        password: '54321',
        database: 'biblioteca'
    }
});

module.exports = db;