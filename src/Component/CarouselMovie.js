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
    <div className=" text-white bg-black ml-16">
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} className="flex justify-center">
            <div className="movie-card w-48 h-64  bg-white bg-opacity-30 border border-1 border-white rounded-md">
              <Link to={`/movies/${movie.title}`}>
                <div className="flex flex-col items-center justify-center text-center p-3">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    style={{ width: "70%", height: "70%" }}
                  />
                  <p className="mt-2 mx-2 text-lg">{movie.title}</p>
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
