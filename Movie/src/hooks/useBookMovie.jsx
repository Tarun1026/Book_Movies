import { useContext } from 'react';
import { BookContext } from '../Context/BookMovieContext';

export const useBookMovie = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBookMovie must be used within a BookContextProvider');
  }
  return context;
};
