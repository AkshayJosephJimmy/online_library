import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from "./Store"
import { useNavigate } from 'react-router-dom';

export default function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '', author: '', description: '', rating: '', category: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const errs = {};
    for (let key in formData) {
      if (!formData[key]) errs[key] = 'Required';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    const newBook = {
      ...formData,
      id: Date.now(),
      rating: parseFloat(formData.rating)
    };
    dispatch(addBook(newBook));
    navigate(`/books/${formData.category}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      {['title', 'author', 'description', 'rating', 'category'].map((field) => (
        <div key={field}>
          <input
            className="border p-2 w-full"
            name={field}
            placeholder={field}
            value={formData[field]}
            onChange={handleChange}
          />
          {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
        </div>
      ))}
      <button className="bg-blue-500 text-white px-4 py-2" type="submit">Add Book</button>
    </form>
  );
}