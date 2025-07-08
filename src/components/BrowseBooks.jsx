import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector(state => state.books);
  const [search, setSearch] = useState("");

  const filtered = books.filter(book =>
    book.category === category &&
    (book.title.toLowerCase().includes(search.toLowerCase()) ||
     book.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{category} Books</h1>
      <input
        className="border p-1 mb-4"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filtered.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} –
            <Link to={`/details/${book.id}`} className="text-blue-600 ml-2">View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}