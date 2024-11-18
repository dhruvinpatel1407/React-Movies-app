import React, { useState, useEffect } from "react";
import { Bars } from "react-loader-spinner";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function CarouselMain() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const trailers = [
    {
      title: "Inception",
      video: "https://www.youtube.com/embed/YoHD9XEInc0",
      startTime: 30, // Start video after 30 seconds
    },
    {
      title: "Avengers: Endgame",
      video: "https://www.youtube.com/embed/TcMBFSGVi1c",
      startTime: 30, // Start video after 30 seconds
    },
    {
      title: "The Dark Knight",
      video: "https://www.youtube.com/embed/EXeTwQWrcwY",
      startTime: 30, // Start video after 30 seconds
    },
    {
      title: "Interstellar",
      video: "https://www.youtube.com/embed/zSWdZVtXT7E",
      startTime: 30, // Start video after 30 seconds
    },
    {
      title: "Spider-Man: No Way Home",
      video: "https://www.youtube.com/embed/JfVOs4VSpmA",
      startTime: 30, // Start video after 30 seconds
    },
    {
      title: "The Matrix Resurrections",
      video: "https://www.youtube.com/embed/9ix7TUGVYIo",
      startTime: 30, // Start video after 30 seconds
    },
  ];

  // Automatically update currentIndex every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % trailers.length);
    }, 30000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [trailers.length]);

  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop interval={30000}>
      {trailers.map((trailer, index) => (
        <div
          key={index}
          style={{
            position: "relative",
            width: "100%",
            height: "50vh",
          }}
        >
          {loading && index === currentIndex && ( // Show spinner only for the active trailer
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 10,
              }}
            >
              <Bars
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="bars-loading"
                visible={true}
              />
            </div>
          )}
          <iframe
            width="100%"
            height="50vh"
            src={`${trailer.video}?autoplay=1&mute=1&start=${trailer.startTime}&controls=0&modestbranding=1&rel=0&fs=0&disablekb=1&playsinline=1`}
            title={trailer.title}
            style={{
              width: "100%",
              height: "50vh",
              border: "none",
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setLoading(false)}
            onLoadStart={() => setLoading(true)}
          />
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselMain;
