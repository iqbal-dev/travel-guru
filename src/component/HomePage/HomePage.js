import React, { useState } from 'react';
import { Carousel, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './HomePage.css';
import image1 from '../../Image/Sajek.png';
import image2 from '../../Image/Sreemongol.png';
import image3 from '../../Image/sundorbon.png'
import Data from '../../fakeDate/fakeDate';
import NavBar from '../Nav/NavBar';
import {
  Link
} from "react-router-dom";

const HomePage = () => {
  const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
  }

  const details = Data.filter(data => data.id === index);
  return (
      <div className="home-page overlay">
        <NavBar></NavBar>
        <div className="row">
        <div className="placeDetails">
            <div className="details">
            {
            details.map(data => <>
              <h1>{data.heading}</h1>
              <p>{data.detail}</p>
               <button ><Link to={`/booking/${index}`} style={{color: 'white', textDecoration:'none'}}> BOOKING <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link></button>
                  
            </>)
                 
              }
          </div>
            </div>
            <div style={{width: '20%'}}>
                <Carousel className="carousel"  activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src={image1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>SAJEK</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image2}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>SREEMONGOL</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image3}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>SUNDARBAN</h3>
              </Carousel.Caption>
            </Carousel.Item>
    </Carousel>
            </div>
        </div>
        </div>
    );
};

export default HomePage;