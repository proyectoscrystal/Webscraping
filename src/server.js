require('dotenv').config();
const cors = require('cors');
const express = require('express');
const session = require('express-session');

const app = express();

// Base de datos
const db = require('./config/db');

db();

// Middlewares
app.use(express.json({ limit: '50mb', extended: true }));
app.use(cors());
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(
  session({
    secret: 'bboxSecretKeyWord',
    resave: true,
    saveUninitialized: true,
  }),
);

// Configuraciones
const properties = require('./config/properties');
const routes = require('./routes/routes');

// Rutas
const businessRouter = require('./routes/routes');
const zaraRouter = require('./routes/zara.routes');
const mangoRouter = require('./routes/mango.routes');

const router = express.Router();

app.use('/', router);
mangoRouter(router);
businessRouter(router);
zaraRouter(router);

// Ruta de prueba
router.get('/', (req, res) => {
  res.send({ message: 'Servidor en línea!' });
});

app.use(router);

// Inicializacion del server
// eslint-disable-next-line no-console
app.listen(properties.PORT, () => console.log(`Server runing on port ${properties.PORT}`));
