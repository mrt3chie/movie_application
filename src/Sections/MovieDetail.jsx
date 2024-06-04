import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FavListForm from "../Components/FavListForm";

const MovieDetail = ({ visible, setSearchBoxVisible }) => {
  const [favListVisibility, setFavListVisibility] = useState(false);

  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=${
            import.meta.env.VITE_OMDB_API_KEY
          }&i=${id}`
        );
        setMovie(response.data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const handleFavList = () => {
    setFavListVisibility(true);
  };

  return (
    <div className="px-14 mt-5">
      <FavListForm
        visible={favListVisibility}
        setSearchBoxVisible={setFavListVisibility}
      />
      <Link to="/">
        <button className="bg-[#E11D48] px-3 py-1 text-white font-normal rounded-[5px] text-[12px] mb-3">
          Back
        </button>
      </Link>
      <div className="flex justify-between ">
        <div>
          <h1 className="text-5xl font-bold">{movie.Title}</h1>
          <div className="flex space-x-16 mt-4">
            <div>
              <p className="text-[16px] font-bold">IMDb Rating</p>
              <div className="flex items-center">
                <img src="\star.png" alt="" className="h-9 mr-2" />
                <p className="text-[15px] font-bold">
                  <span className="text-xl">{movie.imdbRating}</span>/10
                </p>
              </div>
            </div>
            <div>
              <p className="text-[16px] font-bold">Tomato Rating</p>
              <div className="flex items-center">
                <img src="\tomato.png" alt="" className="h-9 mr-2" />
                <p className="text-xl font-bold">{movie.Ratings[1].Value}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-xl">
          <div className="md:flex-1">
            <p>
              {movie.Year} • {movie.Rated} • {movie.Runtime}
            </p>
            <p>{movie.Language}</p>
          </div>
        </div>
      </div>
      <div className="md:flex-1 lg:flex mt-8">
        <div>
          <img
            src={movie.Poster}
            alt=""
            className=" w-[450px] rounded-[19px] "
          />
        </div>
        <div className="mt-5  md:w-[450px] lg:w-[650px] lg:px-5 lg:ml-12">
          <p className="text-[18px]">{movie.Plot}</p>
          <h3 className="mt-6 font-bold text-[#E11D48] underline underline-offset-4">
            Cast
          </h3>
          <div className="ml-8 mt-3">
            <p className="text-[17px]">
              <span className="font-bold mr-2">Director</span>
              {movie.Director}
            </p>
            <p className="text-[17px] mt-2">
              <span className="font-bold mr-2">Writers</span>
              {movie.Writer}
            </p>
            <p className="text-[17px] mt-2">
              <span className="font-bold mr-2">Actors</span>
              {movie.Actors}
            </p>
          </div>
          <h3 className="mt-6 font-bold text-[#E11D48] underline underline-offset-4">
            Recognitions
          </h3>
          <div className="ml-8 mt-3">
            <p className="text-[17px]">
              <span className="font-bold mr-2">Awards</span>
              {movie.Awards}
            </p>
            <p className="text-[17px] mt-2">
              <span className="font-bold mr-2">Country of Filming</span>
              {movie.Country}
            </p>
          </div>
          <button
            onClick={handleFavList}
            className="bg-[#E11D48] px-4 py-2 text-white font-bold rounded-[5px] text-xl mt-16 mb-10"
          >
            <span className="text-[24px] mr-2">+</span> Add to List
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
