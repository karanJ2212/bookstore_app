import React from 'react';

export default function Addbook() {
  return (
    <div>
      <form action="submit">

        <h2>Add a Book</h2>
        <input
          type="text"
          placeholder="
      title of book"
        />
        <input type="text" placeholder="Author of book" />
        <button type="submit">add book</button>
      </form>
    </div>
  );
}
