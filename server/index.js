const express = require('express')
const cors = require('cors')
const app = express();
const user = require('./route/user')
const note = require('./route/note')
const project = require('./route/project')

app.use(express.urlencoded({ extended: true }))
// app.use(express.json())
app.use(cors())
app.use('/user', user)
app.use('/note', note)
app.use('/project', project)
app.use(express.static('public'))

const PORT = process.env.PORT || 3002; 
//todo what is process.env.PORT
//todo อาจจะนำไปใช้กับ config file

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})


