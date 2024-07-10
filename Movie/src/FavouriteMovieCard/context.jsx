import React, { createContext, useContext, useState } from 'react';

const FavoriteContext = createContext();

export const useFavoriteMovie = () => {
  return useContext(FavoriteContext);
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
      const updatedFavoriteMovies = [...prevMovies, movie];
      localStorage.setItem('favoriteMovies', JSON.stringify(updatedFavoriteMovies));
      return updatedFavoriteMovies;
    });
  };

  const removeFavoriteMovie = (id) => {
    setFavoriteMovies((prevMovies) => {
      const updatedFavoriteMovies = prevMovies.filter((movie) => movie.id !== id);
      localStorage.setItem('favoriteMovies', JSON.stringify(updatedFavoriteMovies));
      return updatedFavoriteMovies;
    });
  };

  return (
    <FavoriteContext.Provider
      value={{ favoriteMovies, addFavoriteMovie, removeFavoriteMovie }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
