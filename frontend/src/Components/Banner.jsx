import React from 'react';
import banner from '../../public/banner.png';

function Banner () {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
    <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
    <div className='space-y-10 '>
    <h1 className='text-4xl font-bold'> Hello, Welcomes Here to Learn  Somethings <span className='text-red-500'> New Everyday !!</span></h1>
    <p className='text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, aspernatur pariatur libero culpa accusamus facere corporis temporibus harum totam cum.</p>

 <label className="input input-bordered flex items-center gap-2">
  <svg className="h-[1.4em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="1.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="18" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" className='grow border-none' placeholder="xyz1234@gmail.com" required />
</label>
    </div>

  <div className="validator-hint hidden">Enter valid email address</div>
  <button className="btn btn-outline btn-error mt-5">Error</button>
    </div>

    <div className='w-full md:w-1/2 order-1 md:order-2  mt-12 md:mt-18'>
    <img src={banner} alt="" className=' w-full h-auto max-h-[400px] object-contain mx-auto'/>
    </div>
        </div>

        
        </>
  )
}

export default Banner