import React, { useState, useRef, useCallback, useLayoutEffect } from "react";
import movieLink from "../hooks/useMoviesLink";
import { ThemeProvider } from "styled-components";
import loadingGif from "../assets/loading-white.gif";
import sideBarMovies from "../hooks/usesideBarMovies";
import { MovieCard } from "../styles/MovieCard";
import { Nav } from "../styles/Nav";
import { PageContainer } from "../styles/PageContainer";
import { Right } from "../styles/Right";
import { SimpleTextButton } from "../styles/SimpleTextButton";
import {
  SwitchContainer,
  SwitchLabel,
  SwitchButton,
} from "../styles/SwitchComponent";
import { FaRupeeSign, FaShoppingCart, FaHeart } from "react-icons/fa";
import { useFavoriteMovie } from "../context/FavouriteMoviesContext";
import { FavouriteAndCartMovies } from "../styles/FavouriteAndCartMovies";
import { Link, useNavigate } from "react-router-dom";
import { useBookMovie } from "../context/BookMoviesContext";
import { getLanguageName } from "../utils/languageUtils";

const SearchInput = ({ query, handleChange }) => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Search"
      className="input-search"
      value={query}
      onChange={handleChange}
    />
  );
};

const HomePage = () => {
  const [isOn, setIsOn] = useState(false);
  const [selected, setSelected] = useState("upcoming");
  const [selected2, setSelected2] = useState("popularity.asc");
  const [query, setQuery] = useState("");
  const [dynamicUrl, setDynamicUrl] = useState("");
  const [index, setIndex] = useState(null);
  const { movies, loading, isError } = movieLink(
    selected,
    query,
    dynamicUrl,
    index
  );
  const { movieC, loadingC, isErrorC } = sideBarMovies();
  const navigate = useNavigate();
  const { addFavoriteMovie, favoriteMovies } = useFavoriteMovie();
  const { addBookMovies, bookMovies } = useBookMovie();
  const [dynamicHeading, setDynamicHeading] = useState("Upcoming Movies");

  const movieCategories = [
    { value: "upcoming", heading: "Upcoming Movies" },
    { value: "popular", heading: "Popular Movies" },
    { value: "top_rated", heading: "Top Rated Movies" },
    { value: "now_playing", heading: "Now Playing Movies" },
  ];

  const orderedBY = [
    { value: "popularity.desc", heading: "Popularity" },
    { value: "release_date", heading: "Release Date" },
    { value: "vote_count.desc", heading: "Price" },
  ];

  const handleSearch = useCallback(
    (query) => {
      if (query === "") {
        setDynamicUrl(
          `https://api.themoviedb.org/3/movie/${selected}?api_key=${
            import.meta.env.VITE_SECRET_KEY
          }`
        );
      } else {
        setDynamicUrl(
          `https://api.themoviedb.org/3/search/movie?api_key=${
            import.meta.env.VITE_SECRET_KEY
          }&query=${query}`
        );
      }
    },
    [selected]
  );

  const handleChange3 = useCallback(
    (e) => {
      const query = e.target.value;
      setQuery(query);
      if (query === "") {
        if (index == null) {
          setDynamicUrl(
            `https://api.themoviedb.org/3/movie/${selected}?api_key=${
              import.meta.env.VITE_SECRET_KEY
            }`
          );
        } else {
          setDynamicUrl(`https://tarun1026.github.io/api/db.json`);
        }
      } else {
        handleSearch(query);
      }
    },
    [selected, handleSearch]
  );

  const handleChange = (e) => {
    setSelected(e.target.value);
    setQuery("");

    const selectedCategory = movieCategories.find(
      (category) => category.value === e.target.value
    );
    setDynamicHeading(selectedCategory?.heading || "Movies");
    setDynamicUrl(
      `https://api.themoviedb.org/3/movie/${e.target.value}?api_key=${
        import.meta.env.VITE_SECRET_KEY
      }`
    );
  };

  const clicked = (e) => {
    setDynamicUrl(
      `https://api.themoviedb.org/3/movie/${e.target.value}?api_key=${
        import.meta.env.VITE_SECRET_KEY
      }`
    );
    const selectedCategory = movieCategories.find(
      (category) => category.value === e.target.value
    );
    setDynamicHeading(selectedCategory?.heading || "Movies");
  };

  const handleChange2 = (e) => {
    setSelected2(e.target.value);
    if (e.target.value === "release_date") {
      setDynamicUrl(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_SECRET_KEY
        }&sort_by=release_date.desc`
      );
    } else {
      setDynamicUrl(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_SECRET_KEY
        }&sort_by=${e.target.value}`
      );
    }
  };

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const handleClick = (item, categoryIndex) => {
    setDynamicUrl(`https://tarun1026.github.io/api/db.json`);
    setIndex(categoryIndex);
    setSelected(`${item.category}`);
    setDynamicHeading(`${item.category} Movies`);
  };

  const handleAddFavorite = (movie) => {
    const isDuplicate = favoriteMovies.some((m) => m.id === movie.id);
    if (isDuplicate) {
      alert("This movie is already in your Favourite list!");
      return;
    }
    addFavoriteMovie(movie);
    alert("Movie added to Favourite List");
  };

  const handleBookMovie = (movie) => {
    const isDuplicate = bookMovies.some((m) => m.id === movie.id);
    if (isDuplicate) {
      alert("This movie is already in your Cart");
      return;
    }
    const randomVoteCount = Math.floor(Math.random() * (2000 - 100 + 1)) + 100;
    const movieWithRandomVoteCount = {
      ...movie,
      vote_count: movie.vote_count || randomVoteCount,
    };
    addBookMovies(movieWithRandomVoteCount);
    alert("Movie add to Cart SuccessFully");
    // navigate("/book");
  };

  const darkTheme = {
    backgroundColor: "#0b0b0d",
    color: "#e3e3e3",
    dropdownBackground: "#222831",
    releaseDateColor: "#90f6d7",
    addButtonColor: "blue",
    fColor: "#00FFFF",
  };

  const lightTheme = {
    backgroundColor: "#e3e3e3",
    color: "black",
    dropdownBackground: "#d3d3d3",
    releaseDateColor: "blue",
    addButtonColor: "red",
    fColor: "#041E42",
  };

  return (
    <ThemeProvider theme={isOn ? darkTheme : lightTheme}>
      <PageContainer>
        <Nav>
          <div className="wrap">
            <div className="navbar">
              <img
                src="https://game-zone-seven.vercel.app/assets/logo-ff4914e6.webp"
                alt=""
                className="image"
              />
              <SearchInput query={query} handleChange={handleChange3} />
              <SwitchContainer onClick={toggleSwitch}>
                <SwitchButton isOn={isOn} />
                <SwitchLabel>Dark Mode</SwitchLabel>
              </SwitchContainer>
            </div>
            <FavouriteAndCartMovies>
              <div className="container">
                <div className="right-end">
                  <Link to="/favourite" className="btn-fav-mov">
                    Favourite Movies
                  </Link>
                </div>
                <div className="cIcon">
                  <Link to="/book" className="btn-cart-icon">
                    <FaShoppingCart size={35} className="shop-cart-icon" />
                  </Link>
                </div>
              </div>
            </FavouriteAndCartMovies>
          </div>
        </Nav>
        <Right>
          <div className="right-left-div">
            <div className="left-div">
              <p className="left-p">Genres</p>
              {loadingC ? (
                <p>Loading...</p>
              ) : isErrorC ? (
                <p>{isErrorC}</p>
              ) : (
                <ul>
                  {movieC.map((item, index) => (
                    <li key={item.category} className="category-item">
                      <img
                        src={item.image}
                        alt={item.category}
                        className="category-image"
                      />
                      <SimpleTextButton
                        onClick={() => handleClick(item, index)}
                        className="category-name"
                      >
                        {item.category}
                      </SimpleTextButton>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="right-div">
              <p className="right-p">{dynamicHeading}</p>
              <div className="classname">
                <select
                  value={selected}
                  onChange={(e) => handleChange(e)}
                  onSelect={(e) => clicked(e)}
                  className="dropdown"
                >
                  {movieCategories.map((category, index) => (
                    <option key={index} value={category.value}>
                      {category.heading}
                    </option>
                  ))}
                </select>
                <select
                  value={selected2}
                  onChange={(e) => handleChange2(e)}
                  className="dropdown-2"
                >
                  {orderedBY.map((category, index) => (
                    <option key={index} value={category.value}>
                      Order by: {category.heading}
                    </option>
                  ))}
                </select>
              </div>
              {isError && <h2>{isError}</h2>}
              {loading ? (
                <div>
                  <img
                    src={loadingGif}
                    alt="Loading"
                    className="loading-gif"
                  />
                </div>
              ) : (
                <div className="movie-grid">
                  {movies.map((movie) => (
                    <MovieCard key={movie.id}>
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
                              className="btn-fav"
                              onClick={() => handleAddFavorite(movie)}
                            >
                              <FaHeart size={25} />
                            </button>
                          </div>
                        </div>
                        <div className="cart">
                          {movie.vote_count > 0 ? (
                            <>
                              <FaRupeeSign className="icon-cart" />
                              <p>{movie.vote_count}</p>
                              <div className="aTC-btn">
                                <button
                                  className="btn-cart"
                                  onClick={() => handleBookMovie(movie)}
                                >
                                  Add to Cart
                                </button>
                              </div>
                            </>
                          ) : (
                            <>
                              <FaRupeeSign className="icon-cart" />
                              <p>{Math.floor(Math.random() * (2000 - 100 + 1)) + 100}</p>
                              <div className="aTC-btn">
                                <button
                                  className="btn-cart"
                                  onClick={() => handleBookMovie(movie)}
                                >
                                  Add to Cart
                                </button>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </MovieCard>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Right>
      </PageContainer>
    </ThemeProvider>
  );
};

export default HomePage;
