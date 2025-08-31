import React from 'react'

function Cards({item}) {
    // console.log(item)
  return (
    <>

    <div className='my-3 p-3'>
      <div className="card bg-base-300 w-100 shadow-sm hover:scale-105 duration-200">
  <figure>
   <img src={item.image} alt="Books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    {item.name}
      <div className="badge badge-primary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions  justify-between">
      <div className="badge badge-outline">{item.price}</div>
      <div className="cursor-pointer py-1 px-2 rounded-full border-[2px] badge-outline hover:badge-primary">Buy Now</div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Cards
