import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
const Crousal = () => {
  return (
    <section className="carousel-section" id="home">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active relative">
            <Image
              src="https://abdurkhan11.github.io/solarenergy.github.io/Pics/4.jpg"
             fill={true}
              className="d-block w-100"
              alt="First Slide"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="https://abdurkhan11.github.io/solarenergy.github.io/Pics/1.jpg"
              fill={true}
              className="d-block w-100"
              alt="Second Slide"
            />
          </div>
          <div className="carousel-item">
            <Image src="https://abdurkhan11.github.io/solarenergy.github.io/Pics/3.jpg" fill={true} className="d-block w-100" alt="Third Slide" />
          </div>
          <div className="carousel-item">
            <Image src="https://abdurkhan11.github.io/solarenergy.github.io/Pics/2.jpg" fill={true} className="d-block w-100" alt="Fourth Slide" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  )
}

export default Crousal