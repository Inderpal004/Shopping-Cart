import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
   
    const items = useSelector((state)=> state.cart)

    return (
        <div className='w-full py-4 px-4 flex justify-between items-center bg-violet-500 text-white'>
            <Link to="/" className='font-semibold text-lg'>Redux Toolkit</Link>
            <Link to="/cart" className='font-[500] border py-1 px-5 rounded-md relative focus:outline-none hover:bg-violet-700 transition-all duration-150'>Cart</Link>
            <p className='absolute top-[2px] right-[6px] bg-red-500 py-1 px-2 rounded-2xl text-sm'>{items.length}</p>
        </div>
    )
}
