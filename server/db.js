const Poll = require('express')
let pool = new Poll({
    user: 'user',
    password: 'password',
    host: 'host',
    port: 1111,
    database: 'database',
})

module.exports = pool