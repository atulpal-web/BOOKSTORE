import React from 'react'
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import { useState } from 'react';
import { useEffect } from 'react';

function FreeBook ()  {
  const [book ,setbook] = useState([]);
    useEffect(()=>{
      const GetBook = async()=>{
     try {
        const res = await  axios.get("http://localhost:5000/book");
        const data = res.data.filter((data)=> data.category === "Free");
        console.log(data);

        setbook(data);
     } catch (error) {
      console.log(error);
     }
    };
    GetBook();
    },[]);


    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    };

  return (
    <>
    
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='py-20'>
            <hr />
            <h1 className='text-3xl font-bold text-center  pb-2'>
                Free Books Courses
            </h1>
            <hr />

            <p className='p-15'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit praesentium quae eius sapiente. Explicabo laboriosam, totam, fugiat laudantium optio officia sequi repellendus cumque minus culpa officiis consequatur quam nemo assumenda.</p>
        </div>
    
    
        <div>
        <Slider {...settings}>
           { book.map((item) => (
                <Cards item ={item} key={item.id}/>
            )) }
        </Slider>
        </div>
        </div>
    
    </>
  )
}

export default FreeBook