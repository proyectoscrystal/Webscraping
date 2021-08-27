const mongoose = require('mongoose');
const dbURL = require('./properties').DB;

// Conexión a la base de datos mongo
module.exports = () => {
  mongoose.connect(process.env.MONGODB_URI || dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
    .then(() => console.log(`Mongo connected on ${dbURL}`))
    .catch((err) => console.log(`Connection has error ${err}`));
  mongoose.set('useUnifiedTopology', true);
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongo is disconnected');
      process.exit(0);
    });
  });
};
