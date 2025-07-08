import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="p-4 bg-amber-200 flex gap-6">
      <Link to="/">Home</Link>
      <Link to="/books/Fiction">Browse Books</Link>
      <Link to="/add">Add Book</Link>
    </nav>
  );
}