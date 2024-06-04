import React from "react";
import { FaHeart } from "react-icons/fa";

const MovieCard = ({
  year,
  title,
  imdbRating,
  tomatoRating,
  genre,
  Poster,
}) => {
  return (
    <div className="w-[250px] h-[580px] relative mb-5">
      <div>
        <img src={Poster} alt="img" className="h-[372px] w-full object-cover" />
      </div>
      <div>
        <p className="font-bold text-[#9CA3AF] text-[14px] mt-3">{year}</p>
        <p className="h-14 text-[20px] font-bold">{title}</p>
        <div className="flex justify-between mt-5">
          <div className="flex ">
            <img src="imdb.png" alt="" className="h-4 md:h-5 md:mr-3" />{" "}
            <p>{imdbRating}/100</p>
          </div>
          <div className="flex ">
            <img src="tomato.png" alt="" className="h-4 md:h-5 md:mr-3" />{" "}
            <p>{tomatoRating}</p>
          </div>
        </div>
        <p className="font-bold text-[#9CA3AF] text-[14px] mt-3">{genre}</p>
      </div>
    </div>
  );
};

export default MovieCard;
