const express = require('express')
const cors = require('cors')
const app = express();
const user = require('./route/user')

// app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use('/user', user)


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})