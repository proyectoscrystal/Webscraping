const mongoose = require('mongoose');
const businessSchema = require('./businessModel');

// Queries a la base de datos
businessSchema.statics = {
  create(data, cb) {
    const business = new this(data);
    // console.log('Imagen almacenada');
    business.save(cb);
  },

  get(query, cb) {
    console.log('query: ', query);
    this.find(query, cb);
  },

  getByName(query, params, cb) {
    this.findOneAndUpdate(query, { $pullAll: params }, cb);
  },
  
  deleteImage(id, cb) {
    this.findOneAndDelete(id, cb);
  },
  
  updateFeature(id, query) {
    this.findOneAndUpdate(id, { $push: { features: query } });
  },
};

const businessModel = mongoose.model('Image', businessSchema);
module.exports = businessModel;
