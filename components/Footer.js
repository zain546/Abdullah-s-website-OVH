import React from 'react'

const Footer = () => {
  return (
    <>
    <section>
      <footer style={{marginTop: '1px'}}>
        <div className="container" id="contactus">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-box">
                <h6
                  className="text-uppercase text-primary mb-3"
                  style={{letterSpacing: '3px'}}
                >
                  Payment Methods
                </h6>
                <h3>We Accept</h3>
                <div className="card-area">
                  <i className="fa-brands fa-cc-visa"></i>
                  <i className="fa-sharp fa-regular fa-money-bill-1"></i>
                  <i className="fa-brands fa-cc-mastercard"></i>
                  <i className="fa-brands fa-cc-paypal"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-box">
                <h6
                  className="text-uppercase text-primary mb-3"
                  style={{letterSpacing: '3px'}}
                >
                  Locations
                </h6>
                <ul>
                  <li><a href="#">Dubai</a></li>
                  <li><a href="#">Sharjah</a></li>
                  <li><a href="#">Hattah</a></li>
                  <li><a href="#">Ras-Al-Khaima</a></li>
                  <li><a href="#">Ajman</a></li>
                  <li><a href="#">Abu Dhabi</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-box">
                <h6
                  className="text-uppercase text-primary mb-3"
                  style={{letterSpacing: '3px'}}
                >
                  Our Partners
                </h6>
                <ul>
                  <li><a href="#">Desert Cargo Couriers</a></li>
                  <li><a href="#">AL-FADRAN EXCHANGE</a></li>
                  <li><a href="#">Fahad Travel Agency</a></li>
                  <li><a href="#">Dubai Travel Consultants</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-box">
                <h6
                  className="text-uppercase text-primary mb-3"
                  style={{letterSpacing: '3px'}}
                >
                  Contact Us
                </h6>
                <p>Lorem123@gmailcom</p>
                <p>+971 0123456890</p>
                <h2>Follow us on</h2>
                <p className="socials">
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-pinterest"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-instagram"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
       <footer class="footer-class">
       <p>Copyrights &copy; 2023 All rights are reserved by Abdurrehman.</p>
     </footer>
     </>
  )
}

export default Footer