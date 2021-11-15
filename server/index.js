const express = require('express')

const app = express();
const user = require('./route/user')

app.use(express.urlencoded({extended:false}))
app.use('/api', user)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})