import React from "react";
import MovieCard from "./MovieCard";

const Main = ({ movies }) => {
  const movies_list = movies.map((movie) => {
    return <MovieCard key={movie.id} movie={movie} />;
  });
  return (
    <div
      className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-5 pb-2 gap-x-24 gap-y-52 justify-center mx-auto"
      style={{ width: "80%" }}
    >
      {movies_list}
    </div>
  );
};

export default Main;
