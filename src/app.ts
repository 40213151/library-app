import express from "express";
import { BookController } from "./presentation/bookController";

const app = express();

app.use(express.json());

const bookController = new BookController();

const PORT = process.env.PORT || 3000;

app.post("/books", booksController.add.bind(booksController));
app.get("/books/:id", booksController.findById.bind(booksController));

app.listen(PORT, () => console.log("server is running"));
