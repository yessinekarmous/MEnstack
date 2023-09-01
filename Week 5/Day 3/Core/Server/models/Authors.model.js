const mongoose = require("mongoose");

//--The Schema--//

const AuthorsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minLength: 3,
      required: ["The name of the Author is required , please"],
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports.Author = mongoose.model("Author", AuthorsSchema);
