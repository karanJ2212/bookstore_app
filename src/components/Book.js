import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book">
      <div className="book-content">
        <div className="book-info">
          <h2 className="book-title">{title}</h2>
          <h6 className="book-author">{author}</h6>
          <div className="action-buttons">
            <button className="button-outline" type="button">
              Comments
            </button>
            <button className="button-outline" type="button" onClick={handleRemove}>
              Remove
            </button>
            <button className="button-outline" type="button">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
