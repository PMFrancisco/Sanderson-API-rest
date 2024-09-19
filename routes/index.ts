import express from 'express';
import booksRoutes from './books';

const router = express.Router();

router.use("/books", booksRoutes);

export default router;
