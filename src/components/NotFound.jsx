import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
      <Link to="/" className="text-blue-500">Back to Home</Link>
    </div>
  );
}