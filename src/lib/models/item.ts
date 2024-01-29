import mongoose from "mongoose";

interface Item extends mongoose.Document {
  title: string;
  description: string;
  letter: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';
  image: string;
  itemId: number;
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
  letter: {
    type: String,
    enum: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    required: [true, "Please identify the letter"],
  },
  image: {
    type: String,
    required: false
  },
  itemId: Number,
});


export default mongoose.models.Item || mongoose.model<Item>("Item", ItemSchema);
