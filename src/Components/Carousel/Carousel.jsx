import React from "react";
import './Carousel.css'
const Carousel = ({ images }) => {
  return (
   <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000" >
      
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
          />
        ))}
      </div>

    
      <div className="carousel-inner">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={img.img_src}
              className="d-block w-100"
              style={{ height: "400px", objectFit: "cover" }}
              alt={img.title}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>{img.title}</h5>
              <p>{img.desc}</p>
            </div>
          </div>
        ))}
      </div>

      
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" />
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" />
      </button>
    </div>
  );
};

export default Carousel;
