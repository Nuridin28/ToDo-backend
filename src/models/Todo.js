const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  status: {
    type: String,
    enum: ["To Do", "Trash", "Done"],
    default: "To Do",
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
