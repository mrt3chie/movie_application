import React from "react";
import MovieCard from "../Components/MovieCard";
import { Link } from "react-router-dom";

const MoviesList = ({ movies, sectionTitle }) => {
  return (
    <div>
      <h1 className="text-center font-bold text-4xl mb-10">{sectionTitle}</h1>
      <div className="px-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 p-4 justify-items-center">
        {movies
          .slice(0, 9)
          .sort((a, b) => parseInt(b.Year) - parseInt(a.Year))
          .map((movie) => (
            <Link to={`/movies/${movie.imdbID}`}>
              <MovieCard
                key={movie.imdbID}
                year={movie.Year}
                title={movie.Title}
                imdbRating={movie.imdbRating}
                genre={movie.Genre}
                Poster={movie.Poster}
                tomatoRating={movie.Ratings[1].Value}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default MoviesList;
