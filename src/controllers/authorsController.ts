import { Request, Response, NextFunction } from "express";
import Author from "../models/author";

// GET all authors
const getAllAuthors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authors = await Author.find().populate("books");
    res.json(authors);
  } catch (error) {
    next(error);
  }
};

// GET authors by ID
const getAuthorById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorID } = req.params;
    const author = await Author.findById(authorID).populate("books");

    if (author) {
      res.json(author);
    } else {
      res.status(404).json({ message: "Author Not Found" });
    }
  } catch (error) {
    next(error);
  }
};

// POST(creating or adding)authors
const createAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, country, books } = req.body;
    const newAuthor = await Author.create({ name, country, books });
    res.status(201).json(newAuthor);
  } catch (error) {
    next(error);
  }
};

// PUT(update)authors & " "by ID
const updateAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorID } = req.params;
    const { name, country } = req.body;

    const updatedAuthor = await Author.findByIdAndUpdate(
      authorID,
      { name, country },
      { new: true, runValidators: true }
    );

    if (updatedAuthor) {
      res.json(updatedAuthor);
    } else {
      res.status(404).json({ message: "Author Not Found" });
    }
  } catch (error) {
    next(error);
  }
};

// DELETE authors&authorID
const deleteAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorID } = req.params;

    const deletedAuthor = await Author.findByIdAndDelete(authorID);

    if (deletedAuthor) {
      res.status(204).json({ message: "Author deleted" });
    } else {
      res.status(404).json({ message: "Author Not Found" });
    }
  } catch (error) {
    next(error);
  }
};

export {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
