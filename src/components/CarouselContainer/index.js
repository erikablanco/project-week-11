import React from 'react';
import './carousel.css'
import { Carousel } from 'react-bootstrap';

import image1 from '../../assets/images/1.jpg';
import image2 from '../../assets/images/2.jpg';
import image3 from '../../assets/images/3.jpg';

const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 h-25"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Articles</h3>
          <p>One click Items</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 h-25"
          src={image2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Technology</h3>
          <p>It is the era of technology.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 h-25"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>New articles a day</h3>
          <p>Articles of all kinds.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;
