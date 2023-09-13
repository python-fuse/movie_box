import "../../tailwind.css";
import Header from "./Header";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Main from "./MainPage";

function Home() {
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopMovies = async () => {
      try {
        setLoading(true);
        const apiKey = "34d8f01db1f0d5bfbd1c83af61a58db4";
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,{timeout:5000}
        );

        if (response.data.results) {
          setTopMovies(response.data.results.slice(0, 10));
          setLoading(false);
        }
      } catch (error) {
        setLoading(false)
        console.error("Error fetching top movies:", error);
      }
    };
    fetchTopMovies();
  }, []);
  const ErrorBox = () => {
    return (
      <div className="h-32 w-52">
        <p className="text-error text-2xl">
          There was an error fetching the movie Error:{error}
        </p>
      </div>
    );
  };
  return (
    <>
      <div className="">
        <Header
          setSearch={setTopMovies}
          loading={loading}
          setLoading={setLoading}
          search={topMovies}
        />
        {loading ? (
          <div className="loading mx-auto"></div>
        ) : error ? (
          <ErrorBox />
        ) : (
          <>
            <div
              className="flex text-white font-sans mx-auto my-2 items-center  justify-between"
              style={{ width: "90%" }}
            >
              <h1 className="text-3xl hover:cursor-default">Featured Movies</h1>
              <p className="hover:cursor-pointer hover:text-gold duration-300">
                See more
              </p>
            </div>
            <Main movies={topMovies} />
          </>
        )}
      </div>
    </>
  );
}

export default Home;
