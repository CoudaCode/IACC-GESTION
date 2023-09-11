import {Schema, model} from 'mongoose';

const adminSchema = new Schema({
    fullname: {
      type: String,
      required: true,
    },
    username:{
      type: String,
      required: true,
      unique: true,
    },
    email:{
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role:{
      type: String,
      default: 'admin'
    }
});

export default model('Admin', adminSchema);
