import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const { handleSubmit, register , formState: { errors }} = useForm();

  const onSubmit = async (data) => {
  {
    const userInfo = {
     Email:data.Email,
     Password:data.Password,
   }

     await axios.post("http://localhost:5000/users/login",userInfo)
    .then((res)=> {
      console.log(res.data)
      if(res.data){
        toast.success(' Login Successfully ');
        setTimeout(() => {
        document.getElementById("my_modal_3").close();
        window.location.reload();
       localStorage.setItem('Users',JSON.stringify (res.data));
        }, 1000);
      }

    }).catch((err)=> {
     if(err.response){
      console.log(err)
      toast.error("Error : "+ err.response.data.message)
      setTimeout (()=>{

      },1000)

     }

    })
  }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_3").close()}
          >
            ✕
          </button>

          <h3 className="font-bold text-2xl mb-4 text-center">Login</h3>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Email
              </label>
              <input
                type="Email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                {...register("Email", { required: true })}
              />
              {errors.email && <span className="text-amber-300">Please Field The Email </span>}
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 font-medium">
                Password
              </label>
              <input
                type="Password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                {...register("Password", { required: true })}
              />
              {errors.password && <span className="text-amber-300">Please Field  The Password </span>}

            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-500 duration-200"
            >
              Login
            </button>

            <p className="text-center mt-2 text-sm">
              Don’t have an account?{" "}
              <Link to="/Signup" className="text-red-500 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
