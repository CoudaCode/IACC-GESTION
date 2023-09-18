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
  categorie: {
    type: String,
    required: true,
    enum: ["Automobile", "Sante"],
  },
  assurance: {
    type: Schema.Types.ObjectId,
    refPath: "categorie",
  },
  // periode: {
  //   type: String,
  //   required: true,
  //   enum: ["Mensuelle", "Trimestrielle", "Semestrielle", "Annuelle"],
  // },
  // dateEffet: {
  //   type: Date,
  //   required: true,
  // },
  // dateEcheance: {
  //   type: Date,
  //   required: true,
  // },
  // montant: {
  //   type: Number,
  //   required: true,
  // },
  // commission: {
  //   type: Number,
  //   required: true,
  // },
  // MtnCompagnie: {
  //   type: Number,
  //   required: true,
  // },
});

export default model("Client", clientSchema);
