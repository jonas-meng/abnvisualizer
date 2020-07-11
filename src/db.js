const mongoose = require('mongoose');
const uri = 'mongodb://root:EAmiGHTAtOINgErP@localhost:27017/abn';
var options = { useNewUrlParser: true, useUnifiedTopology: true, authSource: 'admin' };
mongoose.connect(uri, options);
const NodeSchema = new mongoose.Schema({
    name: String,
    description: String,
    parent: String
});

exports.Node = mongoose.model('Node', NodeSchema);