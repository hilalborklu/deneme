const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    name: {
      type: String,
    },

    "Type 1": {
      type: String,
    },
    "Type 2": {
      type: String,
    },
    total: {
      type: Number,
    },
    HP: {
      type: Number,
    },
    Attack: {
      type: Number,
    },
    Defense: {
      type: Number,
    },
    SpAtk: {
      type: Number,
    },
    SpDef: {
      type: Number,
    },
    Speed: {
      type: Number,
    },
    generation: {
      type: Number,
    },
    legandary: {
      type: Boolean,
    },
  },
  { versionKey: false, collection: "pokemonPost" }
);

const User = mongoose.model("pokemonPost", UserSchema);

module.exports = UserSchema;
