import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselMain() {
  const images = [
    "https://picsum.photos/500/300?random=1",
    "https://picsum.photos/500/300?random=2",
    "https://picsum.photos/500/300?random=3",
    "https://picsum.photos/500/300?random=4",
    "https://picsum.photos/500/300?random=5",
    "https://picsum.photos/500/300?random=6",
    "https://picsum.photos/500/300?random=7",
    "https://picsum.photos/500/300?random=8",
    "https://picsum.photos/500/300?random=9",
    "https://picsum.photos/500/300?random=10",
  ];

  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`Movie poster ${index + 1}`}
            style={{ width: "100%", height: "50vh" }}
          />
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselMain;



