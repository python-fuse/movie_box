import React, { useEffect, useState } from "react";
import "./Detail.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Genre from "./Genre";

const Detail = () => {
  const [movie, setMovie] = useState(null);

  const params = useParams();
  // fetching the detail info using id from the route
  useEffect(() => {
    const fetchDetail = async (p) => {
      try {
        const apiKey = "34d8f01db1f0d5bfbd1c83af61a58db4";
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${p}?api_key=${apiKey}`
        );

        if (response) {
          setMovie(response.data);
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    console.log(params);
    fetchDetail(params.id);
  }, [params]);
  // mapping throgh the genres to dynamically create the genre buttons
  const genres = movie?.genres.map((genre) => {
    return <Genre genre={genre.name} />;
  });

  return (
    // deciding where to show the loading animation orthe detail
    <>
      {movie === null ? (
        <div className="loading mt-52 mx-auto"></div>
      ) : (
        <div className="mt-3 ml-2">
          <Link to={"/"}>
            <p className="text-red p-2 border-2 w-fit border-red-400 rounded-xl hover:bg-red-300 duration-300">
              Home
            </p>
          </Link>
          <div>
            <img
              className="poster "
              src={`https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}`}
            />
          </div>

          <div className="main">
            <div className=" flex md:flex-column justify-between items-center">
              <div className="title flex ">
                <div className="font-roboto flex justify-around w-3/4 text-2xl">
                  <p>
                    <span data-testid="movie-title">{movie?.title}</span> ·{" "}
                    <span data-testid="movie-release_date">
                   {movie ? new Date(movie.release_date).toUTCString() : ""}
   
                    </span>{" "}
                    · <span data-testid="movie-runtime">{movie?.runtime}m</span>
                  </p>
                </div>

                {genres}
              </div>
              <p className="text-sm font-cursive">
                {movie.vote_average}/10 | {movie.popularity}
              </p>
            </div>
            <div className="flex justify-between">
              <div className="desc mt-4 ">
                <p data-testid="movie-overview" className="mb-8">
                  {movie?.overview}
                </p>
              </div>
              <div className="side">
                <button className="w-52 p-2 rounded-md  mb-2 border-none bg-pink-800 border-2">
                  See Showtimes
                </button>
                <button className="w-52  rounded-md border-solid border-pink-800 p-2 bg-pink-300 bg-opacity-50 border-2">
                  More watch options
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
