import { Schema, model } from "mongoose";

const comptenceSchema = new Schema({
  nom: {
    type: String,
    required: true,
  },
  niveau: {
    type: String,
    required:true,
  },
  percent: {
    type: Number,
    default: 0
  },
});

export default model("competence", comptenceSchema);
