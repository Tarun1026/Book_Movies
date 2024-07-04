import React, { createContext, useContext, useState } from 'react';


const FavoriteMovieContext = createContext();

export const useFavoriteMovie = () => {
  return useContext(FavoriteMovieContext);
};


export const FavoriteMovieProvider = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState(() => {
    
    const storedFavorites = localStorage.getItem('favoriteMovies');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });


  const addFavoriteMovie = (movie) => {
    const isDuplicate = favoriteMovies.some((m) => m.id === movie.id);
    if (isDuplicate) {
      alert('This movie is already in your favorites!');
      return;
    }

    setFavoriteMovies((prevMovies) => {
      const updatedMovies = [...prevMovies, movie];
      localStorage.setItem('favoriteMovies', JSON.stringify(updatedMovies));
      return updatedMovies;
    });
  };

  const removeFavoriteMovie = (id) => {
    setFavoriteMovies((prevMovies) => {
      const updatedMovies = prevMovies.filter((movie) => movie.id !== id);
      localStorage.setItem('favoriteMovies', JSON.stringify(updatedMovies));
      return updatedMovies;
    });
  };

  return (
    <FavoriteMovieContext.Provider
      value={{ favoriteMovies, addFavoriteMovie, removeFavoriteMovie }}
    >
      {children}
    </FavoriteMovieContext.Provider>
  );
};
