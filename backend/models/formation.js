import { Schema, model } from "mongoose";

const formationSchema = new Schema({
  intitule: {
    type: String,
    required: true,
  },
  certificat: String,
  dateBegin: {
    type: Date,
    required: true,
  },
  dateEnd: {
    type: Date,
    required: true,
  },
  etablissement: {
    type: String,
    required: true,
  },
  diplome:  String,
  description: String,
});

export default model("formation", formationSchema);
