import mongoose, { Document, Schema } from "mongoose";

interface Requests extends mongoose.Document {
  counter: number;
}

const requestSchema = new Schema({
    counter: {
    type: Number,
    default: 0,
  },
});

export default mongoose.models.Requests ||
  mongoose.model<Requests>("Requests", requestSchema);
