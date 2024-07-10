import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Routes, Route } from 'react-router-dom';
import FavoriteMovieCard from "./pages/FavouriteMoviesPage";
import { FavoriteContextProvider } from "./context/FavouriteMoviesContext";
import { BookContextProvider } from "./context/BookMoviesContext";
import BookMovieCard from "./pages/BookMoviesPage";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import OrdersPage from "./pages/OrderPage";

const App = () => {
  const theme = {
    media: { mobile: "480px", tab: "998px", mobile2: "768px", minLaptop: "1400px" },
  };

  return (
    <FavoriteContextProvider>
      <BookContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/favourite" element={<FavoriteMovieCard />} />
            <Route path="/book" element={<BookMovieCard />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="/order" element={<OrdersPage />} />
          </Routes>
        </ThemeProvider>
      </BookContextProvider>
    </FavoriteContextProvider>
  );
};

export default App;
