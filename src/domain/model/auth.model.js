/* eslint-disable no-return-await */
// const bcrypt = require('bcryptjs');

const { Schema, model } = require('mongoose');

// Modelo de usuarios
const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  {
    timestamp: true,
  },
);

// Función para encriptar la contraseña, se deshabilita mientras se definen las
// tareas de la creación de roles.
/*
// Encriptar el password
UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Comparar contraseña encriptad
// eslint-disable-next-line func-names
UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
*/
module.exports = model('User', UserSchema);
