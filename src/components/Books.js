import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Book from './Book';
import Addbook from './Addbook';
import { fetchBooksList } from '../redux/books/books';

export default function Books() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksList());
  }, [dispatch]);

  return (

    <section className="bookContainer">

      {books.map((book) => (
        <li key={book.title + book.author}>

          <Book title={book.title} author={book.author} id={book.id} />
        </li>
      ))}
      <p className="section-divider" />
      <Addbook />
    </section>
  );
}
