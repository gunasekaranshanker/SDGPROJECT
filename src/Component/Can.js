import React from 'react';
import Slider from 'react-slick';
import { Element } from 'react-scroll';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

const Carousel= () => {
  const settings = {
    dots: true,
    Infinity:true,
    autoplay:true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Element id='Home'>
      <div>
      
      <Slider {...settings}>
        <div>
          <img src="https://img.freepik.com/free-vector/hand-drawn-ecology-design-template_23-2149844089.jpg?w=1380&t=st=1705945177~exp=1705945777~hmac=d82acf4baed7416d4be8a580c832bb7ea58f5e72a86f0e3b8f17b60b3a10e4e7" alt="Slide 1" style={{width:"100vw",height:"700px"}} />
        </div>
        <div>
          <img src="https://img.freepik.com/free-vector/realistic-background-world-environment-day-celebration_23-2150359524.jpg?w=1060&t=st=1705945854~exp=1705946454~hmac=921f4991b77fee78dff254e86d83503d612d868d01c5e5352b40e2d755f009ef" alt="Slide 2" style={{width:"100vw",height:"700px"}} />
        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/no-water-no-life-marine-poster_53876-105249.jpg?w=1380&t=st=1705946558~exp=1705947158~hmac=7c0a0ac16652cdccfe50f19fcd200f8d91e0736dcbd8eb7482cc7df623f9e1ca" alt="Slide 3" style={{width:"100vw",height:"700px"}}/>
        </div>
      </Slider>
    </div>
    </Element>
    
  );
};

export default Carousel;
