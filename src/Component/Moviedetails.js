import React from "react";
import movies from "../Movies2.json";
import { useParams } from "react-router-dom";

function Moviedetails() {
  const params = useParams();

  const filteredData = movies.filter(
    (movie) => (movie.title == params.movies_Title)
  );

  return (
    <div className="pt-20 px-48 pb-12 bg-black">
      <h4 className="font-bold text-white text-4xl mb-4">Movie Details :</h4>
      {filteredData.map((movie) => {
        return (
          <div className="col s12 m7 bg-white bg-opacity-30">
            <div className="card flex shadow-lg border border-white border-2 rounded-md">
              <div className="card-image border border-white border-2 m-8">
                <img src={movie.big_image} alt={movie.id} className="w-[400px] h-[350px]" />
              </div>
              <div className="my-8 mr-8 card-stacked pl-12 bg-white bg-opacity-30">
                <div className="card-content">
                  <h4 className="underline text-white font-bold italic text-2xl">{movie.title}</h4>
                  <h5 className="text-xl text-white mt-2">Year : {movie.year}</h5>
                  <h5 className="font-bold text-white underline text-2xl my-4">Description:</h5>
                  <h5 className="text-xl text-white">{movie.description}</h5>
                  <ul className="mb-3">
                    <h5 className="font-bold mt-5 text-white underline text-2xl my-3">Genre:</h5>
                    {movie.genre.map((item, index) => (
                      <li key={index} className="text-white ml-12 text-xl">
                        <h5>{item}</h5>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-action">
                  <a
                    href={movie.imdb_link}
                    target="_blank"
                    className="text-blue-600"
                    rel="noopener noreferrer"
                  >
                    {movie.imdbid} *click here to watch trailer...
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Moviedetails;
