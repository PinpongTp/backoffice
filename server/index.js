const express = require('express')

const app = express();

const user = require('./route/user')

app.use(express.urlencoded({extended:false}))
app.use('/api', user)

app.listen(3002, () => {
    console.log('running at 3002')
})