var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/anime");

var db = mongoose.connection;

db.on("error", function() {
  console.log("mongoose connection error");
});

db.once("open", function() {
  console.log("mongoose connected successfully");
});

var userSchema = mongoose.Schema({
  userName: String,
  password: String,
  watchLater: Array
});

var User = mongoose.model("User", userSchema);

const save = (user, callback) => {
  User.create(user, callback);
};
const findUser = (userName, callback) => {
  User.find({ userName: userName }, callback);
};
// var selectAll = function(callback) {
//   Item.find({}, function(err, items) {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };

module.exports.save = save;
module.exports.findUser = findUser;
