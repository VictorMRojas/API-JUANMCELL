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
  host: process.env.DB_HOST || 'database-juanmcell.ctlwdb7bjfj7.us-east-2.rds.amazonaws.com',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'felipe0228',
  database: process.env.DB_NAME || 'database-juanmcell'
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