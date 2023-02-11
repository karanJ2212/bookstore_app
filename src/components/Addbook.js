import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/books';

export default function AddBook() {
  const dispatch = useDispatch();
  const [book, setBook] = useState({ title: '', author: '', category: '' });

  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = { item_id: uuid(), ...book };

    dispatch(addBook(newBook));
    setBook({ title: '', author: '', category: '' });
  };

  return (
    <section className="add-book">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="new-form" onSubmit={handleSubmit}>

        <input
          className="input title-input"
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
          placeholder="Title of book"
        />
        <input
          className="input author-input"
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          placeholder="Author of book"
        />
        <button className="add-book-btn" type="submit">Add Book</button>
      </form>
    </section>
  );
}
