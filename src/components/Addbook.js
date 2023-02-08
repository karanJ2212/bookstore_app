import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

export default function AddBook() {
  const dispatch = useDispatch();
  const [book, setBook] = useState({ title: '', author: '' });

  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = { id: Date.now(), ...book };
    dispatch(addBook(newBook));
    setBook({ title: '', author: '' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add a Book</h2>
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
          placeholder="Title of book"
        />
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          placeholder="Author of book"
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
