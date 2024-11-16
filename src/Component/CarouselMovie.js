import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

function CarouselMovie({movies}) {
 // const [movies, setMovies] = useState([]);
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
  // useEffect(() => {
  //   fetchMovies();
  // }, []); // This runs only once when the component mounts

  // const fetchMovies = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://imdb-top-100-movies.p.rapidapi.com/", // Your actual API URL
  //       {
  //         headers: {
  //           "x-rapidapi-key":
  //             "e021f5f300msh8550ffb45be89dbp1ce8c2jsn1f3fe33af0b9",
  //           "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
  //         },
  //       }
  //     );

  //     console.log(response);
  //     setMovies(response.data); // Set the movies data
  //   } catch (error) {
  //     console.error("Error fetching movies:", error);
  //   }
  // };

  return (
    <div className=" text-white bg-black">
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} className="flex justify-center">
            <div className="movie-card p-4 flex flex-col items-center justify-center w-48 h-64 text-center bg-white bg-opacity-30 border border-1 border-white rounded-md">
              <img
                src={movie.image}
                alt={movie.title}
                style={{ width: "70%", height: "70%" }}
              />
              <p className="mt-2 mx-2 text-sm">{movie.title}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselMovie;
