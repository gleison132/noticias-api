const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('News', NewsSchema);
