import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector(state => state.books.find(b => b.id === parseInt(id)));

  if (!book) return <p className="p-6">Book not found.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <button onClick={() => navigate(-1)} className="mt-4 text-blue-500">Back to Browse</button>
    </div>
  );
}