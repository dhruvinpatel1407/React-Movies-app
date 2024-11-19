import React, { useState, useEffect } from "react";
import CarouselMain from "../CarouselMain";
import CarouselMovie from "./CarouselMovie";
import movies from "../Movies2.json";
import { Link } from "react-router-dom";

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  // Update trendingMovies when the component mounts or movies change
  useEffect(() => {
    const filteredMovies = movies.filter((trailer) =>
      ["top1", "top2", "top3", "top4", "top5", "top6" , "top7", "top8", "top9", "top10"].includes(trailer.id)
    );
    setTrendingMovies(filteredMovies);
  }, []);


  return (
    <>
      <div className="bg-black mt-16 ">
  <CarouselMain />

  {/* Welcome Section */}
  <div className="font-sans text-center bg-black text-white px-4 sm:px-8 lg:px-16 py-5">
    <section className="bg-black px-4 sm:px-6 lg:px-10 py-10 rounded-lg">
      <h1 className="italic font-bold text-2xl sm:text-3xl lg:text-4xl">
        Welcome to Movie World
      </h1>
      <p className="text-lg sm:text-xl lg:text-2xl font-light italic mt-4">
        Your one-stop destination for all things movies!
      </p>
      <p className="text-lg sm:text-xl lg:text-2xl font-light italic mt-2">
        Explore our curated collections, discover new films, and dive into
        endless entertainment.
      </p>
    <Link to="/movie-world/:formType" >
      <button className="bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded mt-5 hover:bg-green-700 transition-colors duration-300">
        Start Exploring
      </button>
      </Link>  
    </section>
  </div>

  {/* Trending Movies Section */}
  <div className="py-8 pb-24">
    <p className="m-4 text-xl sm:text-2xl text-white ms-4">
      Top Trending Movies
    </p>
    <CarouselMovie movies={trendingMovies} />
  </div>
</div>
    </>
  );
}

export default Home;
