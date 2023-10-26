import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=c45e02c3";

const App = () => {
  const [movies, setMovies] = useState([]); //An empty array that will store the list of movies retrieved from the OMDB API.
  const [searchTerm, setSearchTerm] = useState(""); //An empty string that will store the user's input for searching movies.

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search); //pass data search tu ke setMovies
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      {/* Top-level container for the entire application */}
      <h1>Popcorn Land</h1>
      {/* Display the application title */}
      <div className="search">
        {/* Container for the search input field and search icon */}
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        {/* Input field for entering a search term */}
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            // When clicked, call the searchMovies function with the current search term
            searchMovies(searchTerm);
          }}
        />
        {/* Search icon that triggers the searchMovies function */}
      </div>
      {movies?.length > 0 ? (
        // Conditionally render content based on the presence of movies in the 'movies' array
        <div className="container">
          {movies.map((movie) => (
            /* Map over the 'movies' array and display a MovieCard component for each movie */
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          {/* If there are no movies found, display a "No movies found" message */}
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
