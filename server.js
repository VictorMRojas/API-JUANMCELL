const express = require('express')
const mysql = require('mysql2')
const myconn = require('express-myconnection')

const routes = require('./ApiAccesorios/routes')
const routes2 = require('./ApiDisplay/routes2')
const routesVenta = require('./ApiVentas/routesVenta')
const cors = require('cors')

const app = express()
app.set('port', process.env.PORT || 9001)
const dbOptions = {
    host: process.env.DB_HOST ||'containers-us-west-17.railway.app',
    port: process.env.DB_PORT || 6031,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASWWORD || 'jnHvMhddwIhcAvt4RnuD',
    database: process.env.DB_NAME || 'railway'
}

// Crear la conexión a la base de datos
const connection = mysql.createConnection(dbOptions);

// Conectar a la base de datos
connection.connect(error => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

// Middleware
app.use(express.json());
app.use(cors());

// Rutas
app.get('/', (req, res) => {
  res.send('Bienvenido a mi API');
});
app.use('/api', routes);
app.use('/display', routes2);
app.use('/venta', routesVenta);

// Servidor en ejecución
app.listen(app.get('port'), () => {
  console.log('Servidor ejecutándose en el puerto', app.get('port'));
});