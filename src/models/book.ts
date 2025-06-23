import mongoose, { Schema, Document } from "mongoose";
import { IAuthor } from "./author";
import { ICategory } from "./category";

export interface IBook extends Document {
  title: string;
  author: mongoose.Types.ObjectId | IAuthor;
  categories: (mongoose.Types.ObjectId | ICategory)[];
  coverImage?: string;
}

export const BookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
    categories: [
      { type: Schema.Types.ObjectId, ref: "Category", required: true },
    ],
    coverImage: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model<IBook>("Book", BookSchema);
export default Book;
