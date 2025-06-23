import express from "express";
import {
  getBookById,
  createBook,
  bookDelete,
  getAllBooks,
} from "../controllers/booksController";

const router = express.Router();

router.get("/", getAllBooks);
router.post("/", createBook);
router.get("/:id", getBookById);
router.delete("/:id", bookDelete);

export default router;
