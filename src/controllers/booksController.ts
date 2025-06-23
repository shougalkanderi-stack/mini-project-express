// src/controllers/bookController.ts
import { Request, Response, NextFunction } from "express";
import Book from "../models/book";
import IBook from "../models/book";

const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // your logic
  } catch (error) {
    next(error);
  }
};

const getBookById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    // logic
  } catch (error) {
    next(error);
  }
};

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, author, categories, coverImage } = req.body;

    const book = await Book.create({
      title,
      author,
      categories,
      coverImage,
    });

    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};

const updateBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { bookID } = req.params;
    const { title, author, categories } = req.body;

    const updatedBook = await Book.findByIdAndUpdate(
      bookID,
      { title, author, categories },
      { new: true, runValidators: true }
    );

    if (!updatedBook)
      return res.status(404).json({ message: "Book Not Found" });

    res.json(updatedBook);
  } catch (error) {
    next(error);
  }
};

const bookDelete = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    res.status(200).json({ message: "Book deleted" });
  } catch (error) {
    next(error);
  }
};

export { getAllBooks, getBookById, createBook, updateBook, bookDelete };
