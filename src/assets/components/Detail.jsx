import React, { useEffect, useState } from "react";
import "./Detail.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Genre from "./Genre";

const Detail = () => {
  const [movie, setMovie] = useState(null);

  const params = useParams();

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

  const genres = movie?.genres.map((genre) => {
    return <Genre genre={genre.name} />;
  });

  return (
    <>
      {movie === null ? (
        <div className="loading mx-auto"></div>
      ) : (
        <div>
          <div>
            <img
              className="poster "
              src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
            />
          </div>

          <div className="main">
            <div className=" flex justify-between items-center">
              <div className="title flex ">
                <div className="font-roboto text-2xl">
                  <p data-testid="movie-tite">{movie?.title}</p> ·{" "}
                  <p data-testid="movie-release_date">
                    {movie?.release_date.slice(0, 4)}
                  </p>{" "}
                  · <p data-testid="movie-runtime">{movie?.runtime}m</p>
                </div>

                {genres}
              </div>
              <p>
                {movie.vote_average}/10 | {movie.popularity}
              </p>
            </div>
            <div className="flex justify-between">
              <div className="desc mt-4 ">
                <p data-testid="movie-overview" className="mb-8">
                  {movie?.overview}
                </p>
                <div className="flex flex-col justify-evenly h-full credits">
                  <p>
                    Director: <span>Masashi Kishimoto</span>{" "}
                  </p>
                  <p>
                    Writers: <span>Masashi Kishimoto</span>{" "}
                  </p>
                  <p>
                    Stars: <span>Masashi Kishimoto</span>
                  </p>
                </div>
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
