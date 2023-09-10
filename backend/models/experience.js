import { Schema, model } from "mongoose";

const experienceSchema = new Schema({
  entreprise: {
    type: String,
    required: true,
  },
  poste: {
    type: String,
    required: true,
  },
  description: String,
  dateBegin: {
    type: Date,
    required: true,
  },
  dateEnd: {
    type: Date,
    required: true,
  },
});

export default model("experience", experienceSchema);
