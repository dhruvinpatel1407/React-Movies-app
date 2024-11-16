import React from "react";
import CarouselMain from "../CarouselMain";

function Home() {
  return (
    <>
      <div className="bg-black h-screen mt-16">
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
      </div>
    </>
  );
}

export default Home;
