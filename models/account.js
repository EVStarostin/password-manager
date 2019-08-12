const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
  name: String,
  login: String,
  password: String,
  user_id: Schema.Types.ObjectId
});

module.exports = mongoose.model('accounts', Account);
