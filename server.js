const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const routes = require('./ApiAccesorios/routes')
const routes2 = require('./ApiDisplay/routes2')
const routesVenta = require('./ApiVentas/routesVenta')
const cors = require('cors')

const app = express()
app.set('port', process.env.PORT || 9000)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'felipe0228',
    database: 'juanmcell'
}

// middlewares -------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())
// routes -------------------------------------------
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})
app.use('/api', routes);
app.use('/display', routes2);
app.use('/venta', routesVenta);



// server running -----------------------------------
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})