const db = require('../db/db')

class UserModel {
    constructor({email='', password='', id=0}) {
        this.email = email;
        this.password = password;
        this.id = id;
        this.createAt = new Date();
        this.updateAt = new Date();
    }

    registerUser() {
        return db.execute('INSERT INTO admins (email, password, rec_status) VALUES(?, ?, ?)',
        [this.email, this.password, 'active'])
    }
    static findUserByEmail ({email=''}) {
        return db.execute('SELECT * FROM admins WHERE rec_status = "active" AND admins.email = ?',[email])
    }
    static getUserList () {
        return db.execute('SELECT * FROM admins WHERE rec_status = "active"')
    }

}

module.exports = UserModel;