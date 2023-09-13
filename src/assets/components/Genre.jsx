import React from "react";

const Genre = ({ genre }) => {
  return (
    <button className="hover:bg-pink-400 hover:text-white duration-300 border-2 mx-3 border-pink-600 text-pink-600 border-solid h-8 rounded-full text-xs  p-2">
      {genre}
    </button>
  );
};

export default Genre;
