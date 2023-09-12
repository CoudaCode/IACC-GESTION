import { Schema, model } from "mongoose";

const superAdminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique  : true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default : "superAdmin",
}})

export default model("superAdmin", superAdminSchema);
