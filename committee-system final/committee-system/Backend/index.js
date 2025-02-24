const express = require('express')
const app = express()
const port = 6002
const db = require('./server/config/db')
const seed = require('./server/config/seed')
app.use(express.static('server/public/'))
app.use(express.json())
const cors = require('cors')
app.use(cors())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('welcome to server')
})




const customerRoutes = require('./server/routes/customerRoutes')
app.use('/customer', customerRoutes)


const adminRoutes = require('./server/routes/adminRoutes')
app.use('/admin', adminRoutes)


app.listen(port, (err) => {
    if (err) {
        console.log("error in server", err)
    }
    else {
        console.log('Server is running at port', port)
    }
})