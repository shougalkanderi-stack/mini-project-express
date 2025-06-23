import mongoose, { Schema, Document } from "mongoose";
import { IBook } from "./book";

export interface IAuthor extends Document {
  name: string;
  country: string;
  books: mongoose.Types.ObjectId[] | IBook[];
}

const AuthorSchema = new Schema<IAuthor>(
  {
    name: { type: String, required: true },
    country: { type: String, required: true },
    books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
  },
  { timestamps: true }
);

export default mongoose.model<IAuthor>("Author", AuthorSchema);
