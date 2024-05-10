import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <section className="about-us-section">
    <div className="container" id="aboutus">
      <div className="row align-items-center">
        <div className="col-md-6">
          <Image
            src="https://abdurkhan11.github.io/solarenergy.github.io/Pics/pexels-gustavo-fring-4254165.jpg"
            alt="Company Image"
            width={500}
            height={500}
            className="img-fluid"
            id="img1"
          />
        </div>
        <div className="col-md-6">
          <h6
            className="text-uppercase text-primary mb-3"
            style={{letterSpacing:'3px', fontSize: '30px'}}
          >
            About Us
          </h6>
          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            nec elit ut mi eleifend hendrerit in a urna. Aliquam vel risus
            urna. Pellentesque pharetra risus quis augue ultricies, at lacinia
            metus imperdiet.
          </p>
          <p className="section-text">
            Morbi dictum purus quam, vitae consectetur ipsum pulvinar sit
            amet. In maximus velit vel turpis tristique, eget convallis elit
            finibus. Aenean varius magna sit amet nulla venenatis, vel
            dignissim leo vestibulum.
          </p>
        </div>
      </div>
    </div>
  </section>

  )
}

export default About