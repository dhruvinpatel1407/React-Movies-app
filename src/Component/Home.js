import React, { useState, useEffect } from "react";
import CarouselMain from "../CarouselMain";
import CarouselMovie from "./CarouselMovie";
import movies from "../Movies2.json";
function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  // Update trendingMovies when the component mounts or movies change
  useEffect(() => {
    const filteredMovies = movies.filter((trailer) =>
      ["top1", "top2", "top3", "top4", "top5", "top6" , "top7", "top8", "top9", "top10"].includes(trailer.id)
    );
    setTrendingMovies(filteredMovies);
  }, [movies]);


  return (
    <>
      <div className="bg-black mt-16">
        <CarouselMain />

        <div className="font-sans text-center bg-black text-white p-5 pt-8">
          <section className="bg-black px-5 py-10 rounded-lg ">
            <h1 className="italic font-bold text-4xl">
              Welcome to Movie World
            </h1>
            <p className="text-2xl font-light italic mt-4">
              Your one-stop destination for all things movies!
            </p>
            <p className="text-2xl font-light italic mt-2">
              Explore our curated collections, discover new films, and dive into
              endless entertainment.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded mt-5 hover:bg-green-700 transition-colors duration-300">
              Start Exploring
            </button>
          </section>
        </div>

            <div className="py-8 pb-24"><p className="m-4 text-2xl text-white">Top Trending Movies</p> <CarouselMovie movies={trendingMovies} /></div>
       
      </div>
    </>
  );
}

export default Home;
