import mongoose, { Schema, Document } from "mongoose";
import { ObjectId } from "mongodb";

export interface ICategory extends Document {
  name: string;
  books: ObjectId[];
  createdAt?: Date;
  updatedAt?: Date;
}

const categorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true },
    books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
  },
  {
    timestamps: true, // ✅ Enables createdAt and updatedAt
  }
);

const Category = mongoose.model<ICategory>("Category", categorySchema);
export default Category;
