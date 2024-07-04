import React from "react";
import "./App.css";
import HomePage from "./Home/HomePage";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import {Routes,Route } from 'react-router-dom';
import FavoriteMovieCard from "./FavouriteMovieCard/FavouriteMovieCard";
import { FavoriteMovieProvider } from "./FavouriteMovieCard/context";
import { BookMovieProvider } from "./CartBookMovies/BookMovie";
import BookMovieCard from "./CartBookMovies/BookMovieCard";
import Success from "./Success";
import Cancel from "./Cancel";
import OrdersPage from "./OrderPage";
const App = () => {
  const theme = {
    media: { mobile: "480px", tab: "998px" },
  };

  return (
    <>
    
    <FavoriteMovieProvider>
      <BookMovieProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/favorite" element={<FavoriteMovieCard />} />
          <Route path="/book" element={<BookMovieCard/>} />
          <Route path="/success" element={<Success/>} />
          <Route path="/cancel" element={<Cancel/>} />
          <Route path="/order" element={<OrdersPage/>} />
        </Routes>
      </ThemeProvider>
      </BookMovieProvider>
    </FavoriteMovieProvider>
    </>
  );
};

export default App;
