const { Number } = require("mongoose");
const mongoose = require("mongoose");

const { Schema } = mongoose;
mongoose.set("useCreateIndex", true);

// Modelo de las imágenes
// a partir de la linea 55 se insertan los campos nuevos del scraping hasta linea 94
const businessSchema = new Schema(
  {
    imageName: {
      type: String,
      required: false, // debe ser true, se cambia por prueba
      trim: true,
      unique: false,
    },
    base64: {
      type: String,
      required: false, // debe ser true, se cambia por prueba
      trim: true,
    },
    features: [
      {
        type: String,
        required: false,
      },
    ],
    year: {
      type: String,
      required: false,
      trim: true,
    },
    gender: {
      type: String,
      required: false,
      trim: true,
    },
    origin: {
      type: String,
      required: false,
      trim: true,
    },
    quarter: {
      type: String,
      required: false,
      trim: true,
    },
    use: {
      type: String,
      required: false,
      trim: true,
    },
    numeroTallas : {
      type: Number
    },
    estado:{
      type: String
    },
    user: {
      type: mongoose.Schema.ObjectId,
    },
    categoria: {
      type: String,
      require: false,
      trim: false,
    },
    precio: {
      type: Number,
      require: false,
      trim: false,
    },
    caracteristicas: [
      {
        type: String,
        require: false,
        trim: false,
      },
    ],
    talla: [
      {
        type: String,
        trim: true,
        require: false
      },
    ],
    color: {
      type: String
    },
    materiales: {
      type: String
    },
    descuento: {
      type: Number,
      require: false,
      trim: false,
    },
    tag: {
      type: String,
      require: false,
      trim: false,
    },
    enlaceImagen: {
      type: String,
      require: true,
      trim: false,
      unique: true,
    },
    fecha_consulta: {
      type: Date,
      default: Date.now,
    },
    marca: {
      type: String,
      require: false,
      trim: false,
    },
    prendasGenerales: [
      {
        type: String,
        required: false, // debe ser true, se cambia por prueba
      },
    ],
    prendasInferiores: [
      {
        type: String,
        required: false, // debe ser true, se cambia por prueba
      },
    ],
    hexColors: [
      {
        type: String,
        required: false, // debe ser true, se cambia por prueba
      },
    ],
    principalColors: [
      {
        type: String,
        required: false, // debe ser true, se cambia por prueba
      },
    ],
    pantoneColors: [
      {
        type: String,
        required: false, // debe ser true, se cambia por prueba
      },
    ],
    colores: {
      type: Array,
      required: false, // debe ser true, se cambia por prueba
    },
    prendaColor: {
      type: Array,
      required: false, // debe ser true, se cambia por prueba
    },
  },
  {
    timestamps: true,
  }
);


module.exports = businessSchema;
