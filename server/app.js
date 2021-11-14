const express = require('express')

const app = express();

const user = require('./route/user')
app.use(express.urlencoded({extended:false}))

app.use('/api', user)

app.listen(5000, () => {
    console.log('running at 5000')
})