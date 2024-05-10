import React from 'react'

const Pricing = () => {
  return (
    <section>
    <div className="pricing-table">
      <div className="details">
        <div className="section-title position-relative text-center">
          <h6
            className="text-uppercase text-primary mb-3"
            style={{letterSpacing: '3px'}}
          > 
            Packages
          </h6>
          <h1
            className="font-secondary display-4"
            style={{color: 'white', textDecoration: 'underline'}}
          >
            What We Offer!
          </h1>
        </div>
      </div>
      <div className="grid">
        <div className="box basic">
          <div className="title">Home</div>
          <div className="price">
            <b>1500.$</b>
            <span>Install Once</span>
          </div>
          <div className="features">
            <div>10% Down Payment</div>
            <div>Complete Installation</div>
            <div>Hybrid</div>
            <div>100% Conversion</div>
          </div>
          <div className="button">
            <button>Learn More</button>
          </div>
        </div>
        <div className="box professional">
          <div className="title">Farms</div>
          <div className="price">
            <b>4999.$</b>
            <span>Install Once</span>
          </div>
          <div className="features">
            <div>25% Down Payment</div>
            <div>Full Coverage</div>
            <div>Water System</div>
            <div>Aritifical Sunlight</div>
          </div>
          <div className="button">
            <button>Learn More</button>
          </div>
        </div>
        <div className="box ninja">
          <div className="title">Businesses</div>
          <div className="price">
            <b>10,000.$</b>
            <span>Install Once</span>
          </div>
          <div className="features">
            <div>40% Down Payment</div>
            <div>Mutiple Power Consoles</div>
            <div>Full Coverage</div>
            <div>100% Conversion</div>
          </div>
          <div className="button">
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Pricing