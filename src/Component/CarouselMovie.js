import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function CarouselMovie({ movies }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="text-white bg-black px-4 sm:px-8 lg:px-16">
  <Slider {...settings}>
    {movies.map((movie) => (
      <div key={movie.id} className="flex justify-center">
        <div className="movie-card w-24 h-36 lg:w-48 lg:h-60 md:w-36 md:h-48 sm:w-28 sm:h-44  bg-white bg-opacity-30 border border-white rounded-md">
          {/* sm:w-48 sm:h-64 md:w-56 md:h-72 lg:w-64 lg:h-80 */}
          <Link to={`/movies/${movie.title}`}>
            <div className="flex flex-col items-center justify-center text-center m-3">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-3/4 h-3/4 object-contain"
              />
              <p className="mt-2 mx-2 text-sm md:text-lg sm:text-lg">
                {movie.title}
              </p>
            </div>
          </Link>
        </div>
      </div>
    ))}
  </Slider>
</div>
  );
}

export default CarouselMovie;
