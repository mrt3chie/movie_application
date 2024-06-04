import React, { useEffect, useState } from "react";
import axios from "axios";
import MoviesList from "../Sections/MoviesList";
import SearchBox from "../Components/SearchBox";

const Homepage = ({ searchVisible, setSearchBoxVisible }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("fast");

  const fetchMovies = async (searchQuery) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${
          import.meta.env.VITE_OMDB_API_KEY
        }&s=${searchQuery}&type=movie`
      );
      if (response.data && response.data.Search) {
        const movieDetails = await Promise.all(
          response.data.Search.slice(0, 9).map(async (movie) => {
            const detailResponse = await axios.get(
              `https://www.omdbapi.com/?apikey=${
                import.meta.env.VITE_OMDB_API_KEY
              }&i=${movie.imdbID}`
            );
            return detailResponse.data;
          })
        );
        setMovies(movieDetails);
        setError(false); // Clear error state if successful
      } else {
        setMovies([]);
        setError(true); // Set error state if no movies are found
      }
    } catch (error) {
      console.log("Error", error);
      setMovies([]);
      setError(true); // Set error state if there is an error
    }
  };

  useEffect(() => {
    if (!searchVisible) {
      fetchMovies(searchTerm);
    }
  }, [searchTerm, searchVisible]);

  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  return (
    <div>
      <SearchBox
        visible={searchVisible}
        setSearchBoxVisible={setSearchBoxVisible}
        onSearch={handleSearch}
      />
      {!searchVisible && (
        <>
          <div className="relative text-white">
            <img
              src="./home_img.png"
              alt=""
              className="w-full  h-[250px] lg:h-full object-cover"
            />
            <div className="absolute inset-0 p-4 m-4 lg:m-16 lg:mt-[100px]">
              <p className="text-xl md:text-2xl lg:text-4xl font-bold tracking-wider">
                Fast & Furious 6
              </p>
              <div className="flex items-center mt-3 md:mt-5">
                <img
                  src="imdb.png"
                  alt=""
                  className="h-4 md:h-5 mr-2 md:mr-3"
                />{" "}
                61/100
                <img
                  src="tomato.png"
                  alt=""
                  className="ml-4 md:ml-8 h-4 md:h-5 mr-2 md:mr-3"
                />{" "}
                61/100
              </div>
              <p className="mt-3 md:mt-5 text-sm md:text-base lg:text-lg">
                Hobbs has Dominic and Brian reassemble their
                <br className="hidden md:block" /> crew to take down a team of
                mercenaries
                <br className="hidden md:block" /> Dominic unexpectedly gets
                sidetracked
                <br className="hidden md:block" /> with facing his presumed
                deceased girlfriend, Letty
              </p>
            </div>
          </div>
          <div className="mt-14">
            {error ? (
              <p className="text-center text-xl text-red-500">Not Found</p>
            ) : (
              <MoviesList sectionTitle={"Featured Movies"} movies={movies} />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Homepage;
