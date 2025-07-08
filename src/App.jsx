import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/Home';
import BrowseBooks from './components/BrowseBooks';
import BookDetails from './components/BookDetalis';
import AddBook from './components/AddBooks';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:category" element={<BrowseBooks />} />
        <Route path="/details/:id" element={<BookDetails />} />
        <Route path="/add" element={<AddBook />} />
      </Routes>
    </>
  );
}

export default App;