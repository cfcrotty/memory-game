const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clickySchema = new Schema({
  theID: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, default: "https://via.placeholder.com/150" },
  clicked: { type: Boolean, default: false }
});

const Clicky = mongoose.model("Clicky", clickySchema);

module.exports = Clicky;
