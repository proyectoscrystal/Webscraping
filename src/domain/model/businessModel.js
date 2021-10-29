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
    categoria: {
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
    tipoPrenda: {
      type: String,
      require: false,
      trim: true,
    },
    subCategoria: {
      type: String,
      require: false,
      trim: true
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
    tallasAgotadas: [
      {
        type: String,
        trim: true
      },
    ],
    color: {
      type: String
    },
    materiales: {
      type: String
    },
    material1: {
      type: String
    },
    material2: {
      type: String
    },
    material3: {
      type: String
    },
    material4: {
      type: String
    },
    material5: {
      type: String
    },
    material6: {
      type: String
    },
    material7: {
      type: String
    },
    porcentaje1: {
      type: String
    },
    porcentaje2: {
      type: String
    },
    porcentaje3: {
      type: String
    },
    porcentaje4: {
      type: String
    },
    porcentaje5: {
      type: String
    },
    porcentaje6: {
      type: String
    },
    porcentaje7: {
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
    discontinued:{
      type: Boolean,
      default: false
    },
    enlaceImagen: {
      type: String,
      require: false,
      trim: false,
      unique: false,
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
