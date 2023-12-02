import React from 'react';
import Slider from 'react-slick';
import styles from "./style.module.css"
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import python_img from "../../../../public/images/python.png";
import js_img from "../../../../public/images/js.png";
import django_img from "../../../../public/images/django.png";
import node_img from "../../../../public/images/node.png";
import react_img from "../../../../public/images/react.png";

const Curosel = () => {
  const settings = {
    
    infinite: true,
    speed: 500,
    autoplay: true,            // Enable autoplay
    autoplaySpeed: 2000, 
    slidesToShow: 2,
    centerMode: true, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const images = [node_img, python_img,django_img,js_img,react_img];

  return (
    <div className={styles.container}>
      <h1>TECH STACK</h1>
      <br/>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div className='slidepic' key={index}>
            <Image src={img} height={125}  alt={`img${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Curosel;
