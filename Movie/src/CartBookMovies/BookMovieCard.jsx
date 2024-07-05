import React, { useState } from "react";
import { useBookMovie } from "./BookMovie";
import { Book, Right2 } from "../styles/BookMovieCardStyles";

import { ThemeProvider } from "styled-components";
import { FaRupeeSign } from "react-icons/fa";
import {
  SwitchContainer,
  SwitchLabel,
  SwitchButton,
} from "../styles/Favourite";
import { PageContainer } from "../styles/PageContainer";
import { loadStripe } from "@stripe/stripe-js";

const BookMovieCard = () => {
  const { bookMovies, removeBookMovies, addBookMovies } = useBookMovie();
  const [isOn, setIsOn] = useState(false);
console.log("book",bookMovies);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51PYoCmJmTK5SEvYuMFhxa7o6sFiL1pa2936Y22pXcafcnDexXNSO5fEYOa20tNfpkB9PcIXFO93aYbKneRgpYwTK00miM1att8"
    );
  
    const body = {
      products: bookMovies,
    };
  
    const headers = {
      "Content-Type": "application/json",
    };
  
    try {
      const response = await fetch("https://backend-delta-opal-21.vercel.app/api/create-checkout-session", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
        
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
     
  
      const session = await response.json();
  
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
  
      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  const darkTheme = {
    backgroundColor: "#0b0b0d",
    color: "white",
    dropdownBackground: "#222831",
    releaseDateColor: "#90f6d7",
  };

  const lightTheme = {
    backgroundColor: "white",
    color: "black",
    dropdownBackground: "#d3d3d3",
    releaseDateColor: "blue",
  };
  const getTotalVoteCount = () => {
    return bookMovies.reduce(
      (total, movie) => total + (movie.vote_count || 0),
      0
    );
  };

  return (
    <>
      <ThemeProvider theme={isOn ? darkTheme : lightTheme}>
        <PageContainer>
          <Right2>
            <div className="heading">
              <h2>Your Cart</h2>
              {/* <h3>SubTotal</h3> */}
              <div className="dark-mode">
                <SwitchContainer onClick={toggleSwitch}>
                  <SwitchButton isOn={isOn} />
                  <SwitchLabel>Dark Mode</SwitchLabel>
                </SwitchContainer>
              </div>
            </div>
            <div className="div-divide">
              <div className="movie-grid">
                {bookMovies.length === 0 ? (
                  <div>No Movies in Cart</div>
                ) : (
                  bookMovies.map((movie) => (
                    <Book key={movie.id}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="movie-poster"
                      />
                      <div className="movie-title">
                        <div className="vote">
                          {movie.original_language && (
                            <h2 className="language">
                              {movie.original_language}
                            </h2>
                          )}
                          {movie.vote_average && (
                            <p className="vote-avg">{movie.vote_average}</p>
                          )}
                        </div>
                        <p className="title">{movie.title}</p>
                        <div className="release_date">
                          <div className="rel">{movie.release_date}</div>
                          <div className="fav-icon">
                            <button
                              className="btn-rmv"
                              onClick={() => {
                                removeBookMovies(movie.id);
                                alert(
                                  "Movie Removed from Favourite List Successfully"
                                );
                              }}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                        <div className="cart">
                          <div className="rs">
                            {movie.vote_count && (
                              <FaRupeeSign className="icon-cart" />
                            )}
                          </div>
                          {movie.vote_count && <p>{movie.vote_count}</p>}
                        </div>
                      </div>
                    </Book>
                  ))
                )}
              </div>
              <div className="vl"></div>
              <div className="sub-total">
                SubTotal ({bookMovies.length}{" "}
                {bookMovies.length === 1 ? "item" : "items"}):
                <div className="total-count">
                  <div>
                    <FaRupeeSign className="total-icon" />
                  </div>
                  <div className="price">{getTotalVoteCount()}</div>
                </div>
              </div>
              {/* < a href="https://buy.stripe.com/test_9AQg16bvDgRA7i8000"> */}
              <button className="btn-pay" onClick={makePayment}>
                Proceed to pay
              </button>
              {/* </a> */}
            </div>
          </Right2>
        </PageContainer>
      </ThemeProvider>
    </>
  );
};

export default BookMovieCard;
