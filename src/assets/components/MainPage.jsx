import React from "react";
import MovieCard from "./MovieCard";
import "./MainPage.css";

const Main = ({ movies }) => {
  const movies_list = movies.map((movie) => {
    return <MovieCard key={movie.id} movie={movie} />;
  });
  return (
    <div
      className="grid grid-cols-3 pb-2 gap-x-24 gap-y-52 justify-center mx-auto"
      style={{ width: "90%" }}
    >
      {movies_list}
    </div>
  );
};

export default Main;
