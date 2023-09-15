import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Header.css"; // Import the CSS file

const Header = ({ setSearch, search, loading, setLoading }) => {
  const [banner, setBanner] = useState([]);
  const [query, setQuery] = useState("");

  // fetching a random movie to show as banner
  useEffect(() => {
    const fetchTopMovies = async () => {
      try {
        const apiKey = "34d8f01db1f0d5bfbd1c83af61a58db4";
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=2`
        );

        if (response.data.results) {
          setBanner(
            // the randomization algorithm
            response.data.results[
              Math.floor(Math.random() * response.data.results.length - 1)
            ]
          );
        }
      } catch (error) {
        console.error("Error fetching top movies:", error);
      }
    };
    fetchTopMovies();
  }, [search]);
  const fetchQuery = async (p) => {
    try {
      // also setting loading to true so that the mainpage will know we are try to search
      setLoading(true);
      const apiKey = "34d8f01db1f0d5bfbd1c83af61a58db4";
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${p}&language=en-US&page=1`
      );

      if (response.data.results) {
        setLoading(false);
        setSearch(response.data.results);
      }
    } catch (error) {
      console.error("Error fetching top movies:", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchQuery(query);
  };
  return (
    <>
      <header
        className="header mb-10 pb-3"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${banner?.backdrop_path})`,
          backgroundOpacity: 0.5,
          width: "100%",
          height: 350,
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="main   ">
          <div className="nav p-2  bg-opacity-25  bg-purple-950 font-cinzel">
            <h1 className="title text-4xl text-white ">MovieBox</h1>
            <form onSubmit={handleSubmit}>
              <input
                className="Search rounded text-white border-white px-2 border-b-2 bg-opacity-50 bg-gray-700 outline-none"
                type="search"
                placeholder="Search a movie..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </form>
            <button className="rounded-lg h-7 px-2 text-white mx-2 border-2 border-red-500 border-solid">
              Login
            </button>
          </div>
          <div className="desc  mb-10 px-5  mt-10 text-gold font-sans w-3/4">
            <h1 className="text-3xl mb-1 ">{banner?.title}</h1>
            <p className="overview text-white text-xs w-2/3 pl-2">{banner?.overview}</p>
            <button className="text-white ml-2 rounded font-bold bg-red-600 hover:bg-red-700 duration 300 p-2 mt-2">
              Watch Trailer
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
