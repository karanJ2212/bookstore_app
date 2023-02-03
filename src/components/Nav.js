import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <nav className="nav-bar">
        <a className="nav-brand" href="#/">
          Bookstore CMS
        </a>
        <ul className="nav-links">
          <li>
            <Link className="nav-link" to="/" aria-current="page">
              BOOKS
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/Category">
              CATEGORIES
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
