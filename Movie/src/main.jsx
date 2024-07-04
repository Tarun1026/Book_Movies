import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { FavoriteMovieProvider } from './FavouriteMovieCard/context.jsx'
import { BookMovieProvider } from './CartBookMovies/BookMovie.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <FavoriteMovieProvider>
    <BookMovieProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </BookMovieProvider>
    </FavoriteMovieProvider>
  </React.StrictMode>,
)
