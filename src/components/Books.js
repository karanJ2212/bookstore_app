import React, { useState } from 'react';
import Book from './Book';
import Addbook from './Addbook';

export default function Books() {
  const [books] = useState([{
    title: 'react', author: 'karan',
  }]);
  return (
    <div className="bookContainer">
      <ul className="booklist">
        {books.map((book) => (
          <li key={book.title + book.autor}>
            <Book title={book.title} author={book.author} />

            <button className="remove" type="button">
              remove
            </button>
          </li>
        ))}
      </ul>
      <Addbook />
    </div>
  );
}
