import mongoose, { Schema, model } from 'mongoose';

const bookSchema = new Schema({
  title: { type: String, required: true },
  saga: { type: String, required: true },
  solarSystem: { type: String, required: true },
  publishedDate: { type: Date, required: true },
  summary: String,
  coverImageUrl: { type: String, required: true },
  age: { type: String, required: true },
  numberOfPages: Number,
});

const BookModel = mongoose.model('Book', bookSchema);

export default BookModel;
