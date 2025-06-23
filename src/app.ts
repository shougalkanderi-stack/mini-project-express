import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./data/connectDB";
import categoryRouter from "./routes/categoryRouter";
import bookRouter from "./routes/bookRouter";
import authorsRouter from "../src/routes/authorRouter";
import path from "path";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

app.use(express.json());

app.use(cors());
app.use(morgan("dev"));

// ✅ Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/authors", authorsRouter);
app.use("/books", bookRouter);
app.use("/categories", categoryRouter);

//404 Middleware
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Route Not Found" });
});

// Error Handler Middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("❌ Error:", err.stack);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

// my port
const PORT = 8001;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});
