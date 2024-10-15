import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-sky-400 h-12'>
        <div className='text-blue-600 flex justify-between items-center'>
            <h1 className='text-xl m-2 cursor-pointer'>Navbar</h1>
            <ul className='flex gap-3 mr-4 cursor-pointer '>
                <Link className='hover:text-black' href="/">Home</Link>
                <Link className='hover:text-black' href="/">About us</Link>
                <Link className='hover:text-black' href="/">Service</Link>
                <Link className='hover:text-black' href="/">Contact us</Link>
                
                

            </ul>
        </div>
        
          </div>
  )
}

export default Navbar
