import React from 'react';
import { Link } from 'react-router-dom';
import avatar from './account.svg';

export default function Nav() {
  return (
    <nav className="nav-bar">
      <Link className="nav-brand" to="/">
        Bookstore CMS
      </Link>
      <ul className="nav-links">
        <li>
          <Link
            className="nav-link"
            activeClassName="active"
            to="/"
            aria-current="page"
          >
            BOOKS
          </Link>
        </li>
        <li>
          <Link className="nav-link" activeClassName="active" to="/Category">
            CATEGORIES
          </Link>
        </li>
      </ul>
      <button className="avatar-btn" type="button">
        <img src={avatar} className="avatar" alt="Account avatar" />
      </button>
    </nav>
  );
}
