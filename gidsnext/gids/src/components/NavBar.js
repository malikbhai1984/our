


"use client"

import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation' // Import the useRouter hook

const NavBar = () => {

  const navigate = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-600 h-12 py-2 px-3 flex justify-between items-center">
      <div className="brand">
        <h1 className="text-white text-lg">GIDS</h1>
      </div>
      <button
        className="text-white md:hidden"
        onClick={toggleMobileMenu}
      >
        {/* Display a simple menu icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M0 1a1 1 0 011-1h14a1 1 0 110 2H1a1 1 0 01-1-1z"
          />
          <path
            fillRule="evenodd"
            d="M0 8a1 1 0 011-1h14a1 1 0 110 2H1a1 1 0 01-1-1z"
          />
          <path
            fillRule="evenodd"
            d="M1 14a1 1 0 100 2h14a1 1 0 100-2H1z"
          />
        </svg>
      </button>
      <ul
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:flex-row md:space-x-3  text-black absolute md:static mx-40 text-center bg-blue-600 md:bg-transparent px-4 top-12 md:top-auto md:flex`}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/cimrad">Cimrad</Link>
        </li>
        <li>
          <Link href="/servicespost">Services</Link>
        </li>
        <li>
          <Link href="/getservices">Events</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/addadmin">Signup</Link>
        </li>
    
      </ul>



                              {
                                 localStorage.getItem('token') &&

                                    <div className="pl-5 nav-links"><Link className='link' href="/servicespost">Add Services</Link></div>
                                }

                               

                                {
                                    localStorage.getItem('token') ?
                                        <button onClick={() => {
                                            localStorage.clear()
                                            navigate.push('/addadmin')
                                        }}>LOGOUT</button> :
                                        <button onClick={() => {
                                          navigate.push('/login')
                                        }}>LOGIN</button>
                                }








    </nav>
  );
};

export default NavBar;





/*

//complete tailwind css mobile responsive navbar
"use client"

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-600 h-12 py-2 px-3 flex justify-between items-center">
      <div className="brand">
        <h1 className="text-white text-lg">GIDS</h1>
      </div>
      <button
        className="text-white md:hidden"
        onClick={toggleMobileMenu}
      >
        {/* Display a simple menu icon *yha per kerna hy/}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M0 1a1 1 0 011-1h14a1 1 0 110 2H1a1 1 0 01-1-1z"
          />
          <path
            fillRule="evenodd"
            d="M0 8a1 1 0 011-1h14a1 1 0 110 2H1a1 1 0 01-1-1z"
          />
          <path
            fillRule="evenodd"
            d="M1 14a1 1 0 100 2h14a1 1 0 100-2H1z"
          />
        </svg>
      </button>
      <ul
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:flex md:flex-row md:space-x-3 text-center text-black absolute md:static bg-blue-600 md:bg-transparent px-4 top-12 md:top-auto md:flex`}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/cimrad">Cimrad</Link>
        </li>
        <li>
          <Link href="/servicespost">Services</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/signup">Signup</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;


*/

/*

//navebar wiht code with durgesh

import Link from "next/link";

const Header = () =>{
  return(
    <div>
<h1>Nav is testing</h1>

<nav className='bg-blue-600 h-12 py-2 px-3 flex  justify-around items-center '> 
<div className='brand'>   
<ul>
<li className="nav-item">
         <Link className="nav-link active" href="/">GIDS</Link>
        </li>
        </ul>
        </div>

<div className="">
<ul className="flex space-x-3" > 
              <li className="">
                <Link className="" href="/">
                  Home
                </Link>
              </li>
              <li className="">
                <Link className="" href="/">
                  Cimrad
                </Link>
              </li>

              <li className="">
                <Link className="" href="/servicespost">
                  Services
                </Link>
              </li>

              <li className="">
                <Link className="nav-link active" href="/">
                  Events
                </Link>
              </li>

              <li className="">
                <Link className="nav-link active" href="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="">
                <Link className="nav-link active" href="/signup">
                  Signup
                </Link>
              </li>

              <li className="">
                <Link className="" href="/login">
                  Login
                </Link>
              </li>

            </ul>
</div>

<div>

</div>
<ul className="flex space-x-3">
    <li>
    <Link className="" href="/login">
                  Login
                </Link>
          </li>

          <li>
    <Link className="" href="/login">
                  Signup
                </Link>
          </li>
  </ul>

</nav>






    </div>
  )
}

export default Header;


*/
/* 

//image slider with next.js swipwer

"use client"

import Image from 'next/image';
//import SwiperImage from '../../../public/vercel.vsg';
import swiperimg from "../../../public/next.svg"


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Header = () => {



  return (
    <div>
      <h1>Header Page</h1>
      <div className="container ">
        <h2 className=""> tail wind css classes for user</h2>

        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='swiperSlider'><Image src={swiperimg} /></SwiperSlide>
        <SwiperSlide><Image src={swiperimg} /></SwiperSlide>
        <SwiperSlide><Image src={swiperimg} /></SwiperSlide>
        <SwiperSlide><Image src={swiperimg} /></SwiperSlide>
        <SwiperSlide><Image src={swiperimg} /></SwiperSlide>
       
      </Swiper>

      </div>

    </div>
  )
}

export default Header
*/

/*
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto pt-2 pb-2"> 
              <li className="nav-item">
                <Link className="nav-link active" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" href="/">
                  Cimrad
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" href="/servicespost">
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" href="/">
                  Events
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" href="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" href="/signup">
                  Signup
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" href="/login">
                  Login
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;



*/








/*
import Link from "next/link"

const Header = () =>{
    return(
        <div>


<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav  justify-content-center">
        <li className="nav-item">
         <Link className="nav-link active" href="/"> Home</Link>
        </li>


        <li className="nav-item">
         <Link className="nav-link active" href="/"> Cimrad</Link>
        </li>


        <li className="nav-item">
         <Link className="nav-link active" href="/">Events</Link>
        </li>

        <li className="nav-item">
         <Link className="nav-link active" href="/">Signup</Link>
        </li>


      
         

      </ul>
    </div>
  </div>
</nav>




        </div>
    )
}

export default Header

*/