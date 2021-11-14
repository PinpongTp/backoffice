const db = require('mysql2')

const Database = db.createPool({
    user: "root",
    host: "localhost",
    password: "",
    database: "backoffice"
})

module.exports = Database.promise();