import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, Navigate, useLocation, useNavigate,  } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function Signup() {

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  console.log(location);

  const { handleSubmit,register, formState:{errors}} = useForm();

  const onSubmit = async (data) => {
   const userInfo = {
     FullName:data.FullName,
     Email:data.Email,
     Password:data.Password,
   }

     await axios.post("http://localhost:5000/users/Signup",userInfo)
    .then((res)=> {
      console.log(res.data)
      if(res.data){
         toast.success('Signup Successfully');
         navigate(from, { replace: true });
      }
     localStorage.setItem('Users',JSON.stringify (res.data));

    }).catch((err)=> {
     if(err.response){
      console.log(err)
       toast.error("Error : "+ err.response.data.message)
     }

    })
  };
  
  return (
    <>
      
      <div className=' flex h-screen items-center justify-center'>
        <div id='' className='border-[2px] shadow-md p-5 rounded-md'>
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if this is a button in form it will close the modal */}
            <Link to="/" className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              ✕
            </Link>
            <h3 className='font-bold text-lg text-center'>Signup</h3>
             <div className="mt-4 space-y-2">
              <span>Name:-</span><br />
              <input type="text"placeholder='Write your Full Name ' className='w-80 px-3 py-1 border rounded-md outline-none' 
              {...register("FullName", {required:true})}
              />
            </div>
            {errors.FullName && <span className="text-amber-300">Please Enter Your Name  </span>}


            <div className="mt-4 space-y-2">
              <span>Email:-</span><br />
              <input type="Email"  placeholder='Write your Full Email ' className='w-80 px-3 py-1 border rounded-md outline-none'
            {...register("Email", {required:true})}
               />
            </div>
            {errors.Email && <span className="text-amber-300">Please Field The Email </span>}


            <div className="mt-4 space-y-2">
              <span>Password:-</span><br />
              <input type="Password"  placeholder='Enter Your password' className='w-80 px-3 py-1 border rounded-md outline-none'
            {...register("Password", {required:true})}
               />
            </div>
            {errors.Password && <span className="text-amber-300">Please Field  The Password </span>}

            <div className="flex justify-around mt-4">
              <button className='bg-red-500 text-white rounded px-3 py-1 hover:bg-red-700 duration-200'>Signup</button>
              <p>have Account ? {""} 
              <Link to="/" className='underline text-blue-500 cursor-pointer'>
                Login
              </Link> {""}
              </p>
            </div>
            </form>
          </div>
        </div>
       
      </div>
    </>
  )
}

export default Signup
