import express, { Request, Response } from "express";
import BookModel from "../models/bookModel";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const filter: any = {};

    for (const key in req.query) {
      if (req.query.hasOwnProperty(key)) {
        filter[key] = req.query[key];
      }
    }

    const getBooks = await BookModel.find(filter);
    res.status(200).json(getBooks);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.get("/:_id", async (req: Request, res: Response) => {
  const getBook = await BookModel.findById(req.params._id);
  res.json(getBook);
});

router.post("/", async (req: Request, res: Response) => {
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
    res.status(500).json(error);
  }
});

export default router;
