import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Home() {
  const books = useSelector(state => state.books);
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi'];

  return (
    <div className="p-6">
      <h1 className="text-3xl bg-amber-400 font-bold mb-4">Welcome to the Online Library</h1>
      <h2 className="text-xl font-semibold">Book Categories:</h2>
      <ul className="list-disc pl-6 mb-4">
        {categories.map(cat => (
          <li key={cat}><Link to={`/books/${cat}`}>{cat}</Link></li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold">Popular Books:</h2>
      <ul>
        {books.slice(0, 2).map(book => (
          <li key={book.id}>
            <Link to={`/details/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}