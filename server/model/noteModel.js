const db = require('../db/db')
const tableName = "notes"

class NoteModel {

    constructor({title='', subtitle='', content='', thumbnail='', tags='', postdate='', approve=0 , id=0}) {
        this.title = title
        this.subtitle = subtitle
        this.content = content
        this.postdate = postdate
        this.thumbnail = thumbnail
        this.approve = approve
        this.tags = tags
        this.id = id
        this.rec_added = new Date()
        this.rec_update = new Date()
        // this.rec_status = ''
    }

    insert() {
        return db.execute(`INSERT INTO  ${tableName} (title, subtitle, content, thumbnail, tags, postdate, rec_status) VALUES(?, ?, ?, ?, ?, ?, ?)`,
        [this.title, this.subtitle, this.content, this.thumbnail, this.tags, this.postdate, 'active'])
    }
    // Todo
    // update() { 
    //     return db.execute(`UPDATE ${tableName} SET name = ?, username = ?, email = ?  WHERE id = ?`,
    //     [this.name, this.username, this.email, this.id])
    // }
    static findBy ({field='',data=''}) {
        return db.execute(`SELECT * FROM ${tableName} WHERE rec_status = "active" AND ? = ?`,[field, data])
    }
    static getList () {
        return db.execute(`SELECT * FROM ${tableName} WHERE rec_status = "active"`)
    }
    static findById ({id=0}) {
        return db.execute(`SELECT * FROM ${tableName} WHERE rec_status = "active" AND id = ?`, [id])
    }
    static deleteById ({id=0}) {
        return db.execute(`UPDATE ${tableName} SET rec_status = "inactive" WHERE id = ?`, [id])
    }

}

module.exports = NoteModel;