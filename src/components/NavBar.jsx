import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex border space-x-8 item-center pl-3 py-4'>
        <img src='img/movieicon.png' className='w-[50px]'/>
        <Link to="/" className='text-blue-500 text-3xl font-bold'>Movies</Link>
        <Link to='/watch' className='text-blue-500 text-3xl font-bold'>Watch List</Link>
    </div>
  )
}

export default NavBar