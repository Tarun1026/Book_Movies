import React, { useState, useEffect } from "react";
import axios from "axios";
const movieLink = (point, query, dynamicUrl, index) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let url =
          dynamicUrl ||
          `https://api.themoviedb.org/3/movie/${point}?api_key=${
            import.meta.env.VITE_SECRET_KEY
          }`;
        if (query) {
          url = `https://api.themoviedb.org/3/search/movie?api_key=${
            import.meta.env.VITE_SECRET_KEY
          }&query=${query}`;
        }

        const res = await axios.get(url);
        let data;
        if (dynamicUrl == "https://tarun1026.github.io/api/db.json") {
          data = res.data.categories[index]?.movies;
        } else {
          data = res.data.results;
        }

        if (data.length === 0) {
          setError("No results found");
        } else {
          setError(null);
        }

        // console.log("Data is", data);
        setMovies(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies: ", error);
        setError("Error fetching movies");
        setLoading(false);
      }
    };

    fetchData();
  }, [point, query, dynamicUrl, index]);

  return { movies, loading, isError };
};

export default movieLink;
