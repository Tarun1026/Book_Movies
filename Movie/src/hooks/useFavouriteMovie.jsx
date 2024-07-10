import { useContext } from 'react';
import { FavoriteContext } from '../Context/FavouriteMovieContext';

export const useFavoriteMovie = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error('useFavoriteMovie must be used within a FavoriteContextProvider');
  }
  return context;
};
