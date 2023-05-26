const express = require('express');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const routes = require('./ApiAccesorios/routes');
const routes2 = require('./ApiDisplay/routes2');
const routesVenta = require('./ApiVentas/routesVenta');
const cors = require('cors');

const app = express();
app.set('port', process.env.PORT || 9001);
const dbOptions = {
  host: process.env.DB_HOST || 'containers-us-west-17.railway.app',
  port: process.env.DB_PORT || 6031,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'jnHvMhddwIhcAvt4RnuD',
  database: process.env.DB_NAME || 'railway'
};

// Middleware
app.use(express.json());
app.use(cors());
app.use(myConnection(mysql, dbOptions, 'single'));

// Rutas
app.use('/api', routes);
app.use('/display', routes2);
app.use('/venta', routesVenta);

// Servidor en ejecución
app.listen(app.get('port'), () => {
  console.log('Servidor ejecutándose en el puerto', app.get('port'));
});