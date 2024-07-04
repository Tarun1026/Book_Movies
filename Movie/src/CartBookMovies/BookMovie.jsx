
import React, { createContext, useContext, useState } from 'react';


const BookContext = createContext();


export const useBookMovie = () => {
  return useContext(BookContext);
};


export const BookMovieProvider = ({ children }) => {
  const [bookMovies, setBookMovies] = useState(() => {
   
    const storedFavorites = localStorage.getItem('bookMovies');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  
  const addBookMovies = (book) => {
    const isDuplicate = bookMovies.some((b) => b.id === book.id);
    if (isDuplicate) {
      alert('This book is already in your favorites!');
      return;
    }

    setBookMovies((prevBooks) => {
      const updatedBookMovies = [...prevBooks, book];
      localStorage.setItem('bookMovies', JSON.stringify(updatedBookMovies));
      return updatedBookMovies;
    });
  };

  
  const removeBookMovies = (id) => {
    setBookMovies((prevBooks) => {
      const updatedBookMovies = prevBooks.filter((book) => book.id !== id);
      localStorage.setItem('bookMovies', JSON.stringify(updatedBookMovies));
      return updatedBookMovies;
    });
  };

  return (
    <BookContext.Provider
      value={{ bookMovies, addBookMovies, removeBookMovies }}
    >
      {children}
    </BookContext.Provider>
  );
};
