import mongoose from "mongoose";

interface Keys extends Document {
  Key: string;
  JWT: string;
  Created_At: Date;
  Expire_At?: Date;
}


const keysSchema = new mongoose.Schema({
  Key: {
    type: String,
    required: true,
    minlength: 36,
    maxlength: 36
  },
  JWT: {
    type: String,
    required: true,
    maxlength: 400
  },
  Created_At: {
    type: Date,
    default: Date.now
  },
  Expire_At: {
    type: Date
  }
});


export default mongoose.models.Keys || mongoose.model<Keys>("Keys", keysSchema);
