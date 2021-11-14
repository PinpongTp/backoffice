const express = require('express')
const mysql = require('mysql')
const app = express()

const middleware = (req, res, next) => {
    /* ตรวจสอบว่า authorization คือ Boy หรือไม่*/
    if (req.headers.authorization === "Boy")
        next(); //อนุญาตให้ไปฟังก์ชันถัดไป
    else
        res.send("ไม่อนุญาต")
};

app.use(express.json());
app.use(express.urlencoded({extended:false}))

const db = mysql.createConnection({
    user: "admin",
    host: "localhost",
    password: "admin",
    database: "employeesystem"
})

app.get("/test", middleware, (req, res) => { //เพิ่ม middleware ขั้นกลาง
    res.send("ยอดเงินคงเหลือ 50");
});

app.get("/t",  (req, res) => { //เพิ่ม middleware ขั้นกลาง
    res.send("ยอดเงินคงเหลือ 50");
});


app.get('/employees', (req, res) => {
    db.query("SELECT * FROM employees", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.post('/create', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;

    db.query(
        "INSERT INTO employees (name, age, country, position, wage) VALUES(?,?,?,?,?)",
        [name, age, country, position, wage],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Values inserted")
            }
        }
    )
})

app.put('/update', (req, res) => {
    const id = req.body.id;
    const wage = req.body.wage;
    db.query("UPDATE employees SET wage = ? WHERE id = ?", [wage, id], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.listen('3001', () => {
    console.log('Server is running on port 3001')
})