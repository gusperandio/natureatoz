import mongoose from "mongoose";

interface Item extends mongoose.Document {
  title: string;
  description: string;
}

const ItemSchema = new mongoose.Schema<Item>({
  title: {
    type: String,
    required: [true, "Please provide a name for this item."],
  },
  description: {
    type: String,
    required: [true, "Please provide the item description"],
  },
});

export default mongoose.models.Item || mongoose.model<Item>("Item", ItemSchema);
