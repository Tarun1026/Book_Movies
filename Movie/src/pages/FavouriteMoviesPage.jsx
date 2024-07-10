// components/FavoriteMovieCard.js

import React, { useState } from "react";
import { useFavoriteMovie } from "../context/FavouriteMoviesContext";
import { Favourite, Right2 } from "../styles/FavouriteMoviesCard";
import { ThemeProvider } from "styled-components";
import {
  SwitchContainer,
  SwitchLabel,
  SwitchButton,
} from "../styles/FavouriteMoviesCard";
import { PageContainer } from "../styles/PageContainer";
import { getLanguageName } from "../utils/languageUtils";
const FavoriteMovieCard = () => {
  const { favoriteMovies, removeFavoriteMovie, addFavoriteMovie } =
    useFavoriteMovie();
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
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

  return (
    <>
      <ThemeProvider theme={isOn ? darkTheme : lightTheme}>
        <PageContainer>
          <Right2>
            <div className="heading">
              <h2>Favourite Movies</h2>
              <div className="dark-mode">
                <SwitchContainer onClick={toggleSwitch}>
                  <SwitchButton isOn={isOn} />
                  <SwitchLabel>Dark Mode</SwitchLabel>
                </SwitchContainer>
              </div>
            </div>

            <div className="movie-grid">
              {favoriteMovies.length === 0 ? (
                <div>No favorite movies selected</div>
              ) : (
                favoriteMovies.map((movie) => (
                  <Favourite key={movie.id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="movie-poster"
                    />
                    <div className="movie-title">
                      <div className="vote">
                      {movie.original_language ? (
                            <h2 className="language">
                              {getLanguageName(movie.original_language)}
                            </h2>
                          ):(getLanguageName("en"))
                          }
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
                              removeFavoriteMovie(movie.id);
                              alert(
                                "Movie Removed from Favourite List Successfully"
                              );
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </Favourite>
                ))
              )}
            </div>
          </Right2>
        </PageContainer>
      </ThemeProvider>
    </>
  );
};

export default FavoriteMovieCard;
