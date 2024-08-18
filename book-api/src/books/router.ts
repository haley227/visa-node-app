import express, { Request, Response } from "express";
import { Book, BookList } from "./book";
import * as BookService from "./service";

export const router = express.Router();

// GET all books
router.get("/", async (req: Request, res: Response) => {
    try {
      const books: Book[] = await BookService.findAll();
      res.status(200).send(books);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
});

// GET single book by id
router.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  try {
    const book: Book = await BookService.find(id);

    if (book) {
      return res.status(200).send(book);
    }
    res.status(404).send("Book not found");
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// POST add new book
router.post("/", async (req: Request, res: Response) => {
    try {
      const newBook = await BookService.create(req.body);

      res.status(201).json(newBook);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
});

// edit book by ID
router.put("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
      const bookUpdate: Book = req.body;
      const existingItem: Book = await BookService.find(id);

      if (existingItem) {
        const updatedBook = await BookService.update(id, bookUpdate);
        return res.status(200).json(updatedBook);
      }

      const newItem = await BookService.create(bookUpdate);

      res.status(201).json(newItem);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
});

// DELETE book by ID
router.delete("/:id", async (req: Request, res: Response) => {
    try {
      const id: number = parseInt(req.params.id, 10);

      await BookService.remove(id);

      res.sendStatus(204);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
});