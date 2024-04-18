import React from 'react';
import { addItem } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

export default function Cards({ data, loading }) {

    const dispatch = useDispatch();

    const handleAddtoCart = (product) => {
        dispatch(addItem(product));
        toast.success("Item added Successfully")
    }

    return (
        <div className='w-full bg-gray-100 min-h-[80%] h-auto p-5 flex justify-center flex-wrap gap-6'>
            {loading ? (
                <h1 className='text-3xl text-center w-full font-semibold'>Loading...</h1>
            ) : (
                data.map((item) => (
                    <div className='bg-white p-3 rounded-lg shadow-md w-[300px] h-fit' key={item.id}>
                        <img src={item.image} className='w-[200px] h-[250px] m-auto object-contain' alt='' />
                        <h1 className='text-xl font-semibold text-center mt-2 mb-1'>{item.title.slice(0, 35)}...</h1>
                        <p className='text-center font-[500] text-sm leading-[16px]'>{item.description.slice(0, 60)}...</p>
                        <div className='flex justify-between items-center mt-5'>
                            <p className='font-[500]'>${Math.floor(item.price)}</p>
                            <button onClick={() => handleAddtoCart(item)} className='bg-violet-500 text-white py-1 px-3 rounded-md hover:bg-violet-700 transition-all duration-150'>Add to Cart</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
