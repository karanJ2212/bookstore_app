import React from 'react';

export default function Addbook() {
  return (
    <div>
      <h2>Add a Book</h2>
      <input
        type="text"
        placeholder="
      title of book"
      />
      <input type="text" placeholder="Author of book" />
    </div>
  );
}
