import { Schema, model} from "mongoose";

const santeSchema = new Schema({

    Client: {
        type: Schema.Types.ObjectId,
        ref: "Client",
    },
    periode :{
        type: String,
        required: true,
        default: "Annuelle",
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

export default model("Sante", santeSchema);