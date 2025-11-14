const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'D5-92717-Harsh',
    password: '1820',
    database: 'Hackathon'
})

module.exports = pool