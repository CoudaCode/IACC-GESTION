import { Schema, model } from "mongoose";

const automobileSchema = new Schema({

  client :{
    type: Schema.Types.ObjectId,
    ref: "Client",
  },
  immatriculation: {
    type: String,
    required: true,
  },
  marque: {
    type: String,
    required: true,
  },
  
  usage: {
    type: String,
    required: true,
  },
  puissance: {
    type: String,
    required: true,
  },
  energie: {
    type: String,
    required: true,
  },
  valeurNeuve: {
    type: Number,
    required: true,
  },
  valeurVenale: {
    type: Number,
    required: true,
  },
  dateCirculation: {
    type: Date,
    required: true,
  },
  periode:{
    type: String,
    required: true,
    enum: ["Mensuelle", "Trimestrielle", "Semestrielle", "Annuelle"],
  },
  dateEffet: {
    type: Date,
    required: true,
  },
  dateEcheance: {
    type: Date,
    required: true,
  },
})
export default model("Automobile", automobileSchema);