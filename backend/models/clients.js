import { Schema, model } from "mongoose";

const clientSchema = new Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  addresse: {
    type: String,
    required: true,
  },
  telephone: {
    type: Number,
    required: true,
    length: 25,
  },
  email: {
    type: String,
    required: true,
  },
  periode: {
    type: String,
    required: true,
    enum: ["Mensuelle", "Trimestrielle", "Semestrielle", "Annuelle"],
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
  dateEffet: {
    type: Date,
    required: true,
  },
  dateEcheance: {
    type: Date,
    required: true,
  },
  montant: {
    type: Number,
    required: true,
  },
  commission: {
    type: Number,
    required: true,
  },
  MtnCompagnie: {
    type: Number,
    required: true,
  },
});

export default model("Client", clientSchema);
