import React, { useState, useRef, useCallback, useLayoutEffect } from "react";
import movieLink from "../customeHook/movieLink";
import { ThemeProvider } from "styled-components";
import loadingGif from "../assets/loading-white.gif";
import sideBarMovies from "../sideBar/sideBarMovies";
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

import { FaRupeeSign,FaShoppingCart  } from "react-icons/fa";
import { useFavoriteMovie } from "../FavouriteMovieCard/context";
import { FavouriteMovies } from "../styles/FavouriteMovies";
import { Link, useNavigate } from "react-router-dom";
import { useBookMovie } from "../CartBookMovies/BookMovie";
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

const HomePage = ({ movie }) => {
  const [isOn, setIsOn] = useState(false);
  const [selected, setSelected] = useState("popular");
  const [selected2, setSelected2] = useState("release_date");
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
  const{addBookMovies,bookMovies}=useBookMovie();
  const [dynamicHeading, setDynamicHeading] = useState("Popular Movies");
  const movieCategories = [
    { value: "popular", heading: "Popular Movies" },
    { value: "upcoming", heading: "Upcoming Movies" },
    { value: "top_rated", heading: "Top Rated Movies" },
    { value: "now_playing", heading: "Now Playing Movies" },
  ];

  const orderedBY = [
    { value: "release_date", heading: "Release Date" },
    { value: "popularity", heading: "Popularity" },
    { value: "average", heading: "Average" },
    { value: "voting", heading: "Voting" },
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
      alert("This movie is already in your Cart ");
      return;
    }
    addBookMovies(movie);
    alert("Movie added to Cart");
  };
  const darkTheme = {
    backgroundColor: "#0b0b0d",
    color: "#e3e3e3",
    dropdownBackground: "#222831",
    releaseDateColor: "#90f6d7",
    addButtonColor: "blue",
  };

  const lightTheme = {
    backgroundColor: "#e3e3e3",
    color: "black",
    dropdownBackground: "#d3d3d3",
    releaseDateColor: "blue",
    addButtonColor: "red",
  };

  return (
    <ThemeProvider theme={isOn ? darkTheme : lightTheme}>
      <PageContainer>
        <Nav>
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
        </Nav>
        <FavouriteMovies>
          <div className="container">
            {/* <div className="content"></div> */}
            <div className="right-end">
              <Link to="/favorite">
                <button className="btn-fav-mov">Favourite Movies</button>
                <Link to="/book">
                <button className="btn-cart-icon"><FaShoppingCart size={20} className="shop-cart-icon"/></button>
              </Link>
              </Link>
            </div>
          </div>
        </FavouriteMovies>
        {/* <FavouriteMovies>
          <div className="container">
            {/* <div className="content"></div> */}
            {/* <div className="right-end">
             
            </div> */}
          {/* </div> */}
        {/* </FavouriteMovies>  */}
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
                  <img src={loadingGif} alt="Loading" className="loading-gif" />
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
                          {movie.original_language && (
                            <h2 className="language">
                              {" "}
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
                              className="btn-fav"
                              onClick={() => handleAddFavorite(movie)}
                            >
                              ADD
                            </button>
                          </div>
                        </div>
                        <div className="cart">
                        {movie.vote_count && (<FaRupeeSign className="icon-cart"/>)}
                         {movie.vote_count && (<p>{movie.vote_count}</p>)} 
                         {movie.vote_count && ( <button className="btn-cart"
                         onClick={() => handleBookMovie(movie)}
                         >Add to Cart</button>)}
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
