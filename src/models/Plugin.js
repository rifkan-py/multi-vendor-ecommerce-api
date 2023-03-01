const mongoose = require("mongoose");

const pluginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  users: {
    type: [mongoose.Types.ObjectId],
    ref: "User",
  },
});

module.exports = mongoose.model("plugins", pluginSchema);
