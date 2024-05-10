"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Search from './Search';
const Navbar = () => {
  return (
    <>
<header>
      <div className="container-fluid">
        <div className="navb-logo ">
          <Image
            src="https://abdurkhan11.github.io/solarenergy.github.io/Pics/logo.png"
            height={60} width={60}
            alt="Logo"
          />
          <div>

      <Search/>
          </div>
        </div>


        <div className="navb-items d-none d-xl-flex ">
          <div className="item">
            <a href="#home">Home</a>
          </div>

          <div className="item">
            <a href="#services">Services</a>
          </div>

          <div className="item">
            <a href="#aboutus">About</a>
          </div>

          <div className="item-button">
            <a href="#contactus" type="button" className='text-decoration-none'>Contact Us</a>
          </div>
        </div>

        <div className="mobile-toggler d-lg-none">
          <a href="#" data-bs-toggle="modal" data-bs-target="#navbModal">
            <i className="fa-solid fa-bars"></i>
          </a>
        </div>

        <div
          className="modal fade"
          id="navbModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <Image
                  src="https://abdurkhan11.github.io/solarenergy.github.io/Pics/logo.png"
                  height={60} width={60}  
                  className='object-fit-contain'
                  alt="Logo"
                />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>

              <div className="modal-body">
                <div className="modal-line">
                  <i className="fa-solid fa-house"></i><a href="#home">Home</a>
                </div>

                <div className="modal-line">
                  <i className="fa-solid fa-bell-concierge"></i
                  ><a href="#services">Services</a>
                </div>

                <div className="modal-line">
                  <i className="fa-solid fa-circle-info"></i
                  ><a href="#aboutus">About</a>
                </div>


              

                <a href="#contactus" className="navb-button" type="button"
                  >Contact Us</a
                >
              </div>

              <div className="mobile-modal-footer">
                <a target="_blank" href="#"
                  ><i className="fa-brands fa-instagram"></i
                ></a>
                <a target="_blank" href="#"
                  ><i className="fa-brands fa-linkedin-in"></i
                ></a>
                <a target="_blank" href="#"
                  ><i className="fa-brands fa-youtube"></i
                ></a>
                <a target="_blank" href="#"
                  ><i className="fa-brands fa-facebook"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Navbar
