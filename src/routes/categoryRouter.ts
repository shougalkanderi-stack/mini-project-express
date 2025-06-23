import express from "express";
import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoriesController";

const categoryRouter = express.Router();

categoryRouter.get("/", getAllCategories);
categoryRouter.get("/:id", getCategoryById);
categoryRouter.post("/", createCategory);
categoryRouter.put("/:id", updateCategory);
categoryRouter.delete("/:id", deleteCategory);

export default categoryRouter;
