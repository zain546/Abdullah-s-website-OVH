import React from 'react'
import Image from 'next/image'
const Services = () => {
  return (
    <section  id="service" style={{backgroundColor: 'black'}}>
      <div>
        <div className="container py-5">
          <div className="section-title position-relative text-center">
            <h6
              className="text-uppercase text-primary mb-3"
              style={{letterSpacing: '3px'}}
            >
              Services
            </h6>
            <h1
              className="font-secondary display-4"
              style={{color: 'white', textDecoration: 'underline'}}
            >
              What We Cover
            </h1>
          </div>
        </div>
        <div className="row" id="services">
          <div className="col-md-4">
            <div className="single-service">
              <div className="service-bg service-bg-1" >
                <Image src="https://abdurkhan11.github.io/solarenergy.github.io/Pics/ricardo-gomez-angel-IQDWnu2xfRI-unsplash.jpg" fill={true} className='object-fit-cover'
                alt="" />
                <h2>Maintainence</h2>
              </div>
              <div className="service-text">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ducimus commodi blanditiis autem aspernatur temporibus
                  inventore dolores esse obcaecati dolor consequatur.
                </p>
                <a href="" className="btn-area"
                  >Read More <i className="fa-solid fa-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-service">
              <div className="service-bg service-bg-2">
              <Image src="https://abdurkhan11.github.io/solarenergy.github.io/Pics/bill-mead-wmaP3Tl80ww-unsplash.jpg" fill={true} className='object-fit-cover'
                alt="" />
                <h2>Installation</h2>
              </div>
              <div className="service-text">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ducimus commodi blanditiis autem aspernatur temporibus
                  inventore dolores esse obcaecati dolor consequatur.
                </p>
                <a href="" className="btn-area"
                  >Read More <i className="fa-solid fa-arrow-right"></i
                ></a>
              </div>    
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-service">
              <div className="service-bg service-bg-3">
              <Image src="https://abdurkhan11.github.io/solarenergy.github.io/Pics/vivint-solar-9CalgkSRZb8-unsplash.jpg" fill={true} className='object-fit-cover'
                alt="" />
                <h2>Hybrid</h2>
              </div>
              <div className="service-text">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ducimus commodi blanditiis autem aspernatur temporibus
                  inventore dolores esse obcaecati dolor consequatur.
                </p>
                <a href="" className="btn-area"
                  >Read More <i className="fa-solid fa-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services