const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const routes = require('./ApiAccesorios/routes')
const routes2 = require('./ApiDisplay/routes2')
const routesVenta = require('./ApiVentas/routesVenta')
const cors = require('cors')

const app = express()
//app.set('port', process.env.PORT || 9001)
const dbOptions = {
    URL: 'mysql://root:jnHvMhddwIhcAvt4RnuD@containers-us-west-17.railway.app:6031/railway',
    host: 'containers-us-west-17.railway.app',
    port: 6031,
    user: 'root',
    password: 'jnHvMhddwIhcAvt4RnuD',
    database: 'railway'
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
//app.listen(app.get('port'), ()=>{
 //   console.log('server running on port', app.get('port'))
//})