import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import data from "../../assets/data/data";
import classes from "./carousel.module.css";

const PhotosCarousel = () => {
  const [images, setImages] = useState(data);

  const photos = images.map((items) => {
    return (
      <Carousel.Item>
        <img
          className={`${"d-block w-100 "} ${classes["carousel-img"]}`}
          src={items.img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return (
    <div className={classes["carousel-container"]} id="galerie">
      <h2 className={classes["carousel-titel"]}> Gallerie</h2>
      <Carousel fade touch interval={2000}>
        {photos}
      </Carousel>
    </div>
  );
};

export default PhotosCarousel;
