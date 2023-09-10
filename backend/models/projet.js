import { Schema, model } from "mongoose";

const projetSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  liens: {
    type: String,
    required: true,
    unique: true,
  },
  technologie: {
    type: [String],
    required: true
  },
  image: {
    type: String,
    required : true,
    },
  categorie: {
    type: String,
    required: true,
  },
});

export default model("projet", projetSchema);
