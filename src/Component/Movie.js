import { React, useState, useEffect } from "react";
import moviesdata from "../Movies2.json";
import CarouselMovie from "./CarouselMovie";
import { RotatingLines } from "react-loader-spinner";

function Movie() {
  const [movies, setMovies] = useState(moviesdata);
  const [dramaMovies, setDramaMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [biographyMovies, setBiographyMovies] = useState([]);
  const [historyMovies, setHistoryMovies] = useState([]);
  const [crimeMovies, setCrimeMovies] = useState([]);
  const [adventureMovies, setAdventureMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);

 
 // Filtering the movies after they are fetched
  useEffect(() => {
    if (movies.length > 0) {
      setDramaMovies(movies.filter((movie) => movie.genre[0] === "Drama"));
      setActionMovies(movies.filter((movie) => movie.genre[0] === "Action"));
      setBiographyMovies(
        movies.filter((movie) => movie.genre[0] === "Biography")
      );
      setHistoryMovies(movies.filter((movie) => movie.genre[2] === "History"));
      setCrimeMovies(movies.filter((movie) => movie.genre[0] === "Crime"));
      setAdventureMovies(
        movies.filter((movie) => movie.genre[0] === "Adventure")
      );
      setComedyMovies(movies.filter((movie) => movie.genre[0] === "Comedy"));
      setHorrorMovies(movies.filter((movie) => movie.genre[0] === "Horror"));
    }
  }, [movies]); // Runs every time the `movies` state changes

  console.log(dramaMovies);
  return (
    <>
      <div className="bg-black mt-16 pb-20 overflow-x-hidden">
        {/* Drama Movies */}
        <div id="drama" className="pt-4 ">
          <p className="text-white text-2xl my-4 ml-8">Drama Movies:</p>
          <div>
            {dramaMovies.length ? (
              <CarouselMovie movies={dramaMovies} />
            ) : (
              <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            )}
          </div>
        </div>

        {/* Comedy Movies */}
        <div id="comedy">
          <p className="text-white text-2xl my-4 ml-8">Comedy Movies:</p>
          {comedyMovies.length ? (
            <CarouselMovie movies={comedyMovies} />
          ) : (
            <RotatingLines
              visible={true}
              height="96"
              width="96"
              color="grey"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          )}
        </div>

        {/* Action Movies */}
        <div id="action">
          <p className="text-white text-2xl my-4 ml-8">Action Movies:</p>
          {actionMovies.length ? (
            <CarouselMovie movies={actionMovies} />
          ) : (
            <RotatingLines
              visible={true}
              height="96"
              width="96"
              color="grey"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          )}
        </div>

        {/* Crime Movies */}
        <div id="crime">
          <p className="text-white text-2xl my-4 ml-8">Crime Movies:</p>
          {crimeMovies.length ? (
            <CarouselMovie movies={crimeMovies} />
          ) : (
            <RotatingLines
              visible={true}
              height="96"
              width="96"
              color="grey"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          )}
        </div>

        {/* Horror Movies */}
        <div id="horror">
          <p className="text-white text-2xl my-4 ml-8">Horror Movies:</p>
          {horrorMovies.length ? (
            <CarouselMovie movies={horrorMovies} />
          ) : (
            <RotatingLines
              visible={true}
              height="96"
              width="96"
              color="grey"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          )}
        </div>

        {/* History Movies */}
        <div id="history">
          <p className="text-white text-2xl my-4 ml-8">History Movies:</p>
          {historyMovies.length ? (
            <CarouselMovie movies={historyMovies} />
          ) : (
            <RotatingLines
              visible={true}
              height="96"
              width="96"
              color="grey"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          )}
        </div>

        {/* Biography Movies */}
        <div id="biography">
          <p className="text-white text-2xl my-4 ml-8 ">Biography Movies:</p>
          {biographyMovies.length ? (
            <CarouselMovie movies={biographyMovies} />
          ) : (
            <RotatingLines
              visible={true}
              height="96"
              width="96"
              color="grey"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          )}
        </div>

        {/* Adventure Movies */}
        <div id="adventure">
          <p className="text-white text-2xl my-4 ml-8">Adventure Movies:</p>
          {adventureMovies.length ? (
            <CarouselMovie movies={adventureMovies} />
          ) : (
            <RotatingLines
              visible={true}
              height="96"
              width="96"
              color="grey"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          )}
        </div>
      </div>
     
    </>
  );
}

export default Movie;
