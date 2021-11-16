const db = require('../db/db')
const tableName = "admins"

class UserModel {

    constructor({name='', username='', email='', password='', id=0}) {
        this.name = name
        this.username = username
        this.email = email
        this.password = password
        this.id = id
        this.createAt = new Date()
        this.updateAt = new Date()
    }

    registerUser() {
        return db.execute('INSERT INTO admins (name, username, email, password, rec_status) VALUES(?, ?, ?, ?, ?)',
        [this.name, this.username, this.email, this.password, 'active'])
    }
    static findUserByUsername ({username=''}) {
        return db.execute(`SELECT * FROM admins WHERE rec_status = "active" AND username = ?`,[username])
    }
    static findUserByEmail ({email=''}) {
        return db.execute(`SELECT * FROM ${tableName} WHERE rec_status = "active" AND email = ?`,[email])
    }
    static getUserList () {
        return db.execute(`SELECT * FROM ${tableName} WHERE rec_status = "active"`)
    }
    static deleteUserById ({id=0}) {
        return db.execute(`UPDATE ${tableName} SET rec_status = "inactive" WHERE id = ?`, [id])
    }

}

module.exports = UserModel;