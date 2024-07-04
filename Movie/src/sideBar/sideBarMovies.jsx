import React, { useState, useEffect } from "react";
import axios from "axios";

const sideBarMovies = () => {
  const [movieC, setMovieC] = useState([]);
  const [loadingC, setLoadingC] = useState(false);
  const [isErrorC, setErrorC] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoadingC(true);
        const res = await axios.get("https://tarun1026.github.io/api/db.json");
        console.log("data local is",res.data)
        setMovieC(res.data.categories);

        setLoadingC(false);
      } catch (error) {
        console.error("Error fetching movies: ", error);
        setErrorC("Error fetching movies");
        setLoadingC(false);
      }
    };

    fetchMovies();
  }, []);

  return { movieC, loadingC, isErrorC };
};

export default sideBarMovies;
