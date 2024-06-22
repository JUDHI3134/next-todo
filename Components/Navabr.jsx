import React from 'react'

const Navabr = () => {
  return (
    <div className='flex py-3 flex-wrap justify-around items-center h-20 shadow-lg cursor-pointer'>
      <h1 className='text-lg font-semibold'>TODO APP</h1>
      <ul className='flex md:gap-[40px] text-md gap-2 font-semibold'>
        <li>Home</li>
        <li>Products</li>
        <li>About-us</li>
        <li>Contact-us</li>
      </ul>
    </div>
  )
}

export default Navabr
