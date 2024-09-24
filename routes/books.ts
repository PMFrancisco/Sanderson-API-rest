import express, { Request, Response } from "express";
import BookModel from "../models/bookModel";

const router = express.Router();

router.get("/", async(req: Request, res: Response) => {
  const getBooks = await BookModel.find();
  res.json(getBooks);
});

router.post("/", async(req: Request, res: Response) => {
  try {
    const book = new BookModel({
      title: req.body.title,
      saga: req.body.saga,
      solarSystem: req.body.solarSystem,
      publishedDate: req.body.publishedDate,
      summary: req.body.summary,
      coverImageUrl: req.body.coverImageUrl,
      age: req.body.age,
      numberOfPages: req.body.numberOfPages,
    });
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json(error)
  }
})

export default router;
