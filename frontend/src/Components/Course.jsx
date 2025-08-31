import React from 'react';
import Cards from './Cards';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Course() {
  const [book ,setbook] = useState([]);
    useEffect(()=>{
      const GetBook = async()=>{
     try {
        const res = await  axios.get("http://localhost:5000/book");
        console.log(res.data)
        setbook(res.data)
     } catch (error) {
      console.log(error)
     }
    };
    GetBook();
    },[])
  
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-10 px-4 pt-28">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-bold">
          We're Delighted To Have You <span className="text-red-500">Here ❤️</span>
        </h1>
        <p className="mt-6 text-gray-400 leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, eaque? Eum error rerum ex sit quod
          exercitationem fugiat? Voluptatum nam porro, quia adipisci tenetur nostrum repellendus ratione, iusto
          provident ullam vitae sint! Esse laborum corrupti quasi nihil minima, doloribus non.
        </p>
      <Link to="/"> 
        <button className="bg-red-600 text-white px-6 py-2 rounded-2xl hover:bg-red-400 duration-200 mt-6">
          Back
        </button>
      </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {book.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Course;
