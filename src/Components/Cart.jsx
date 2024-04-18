import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, increaseQuantity, decreaseQuantity,clearCart } from '../store/cartSlice';
import toast from 'react-hot-toast';

export default function Cart() {

    const items = useSelector((state) => state.cart);
    const totalPrice = useSelector((state) => state.cart.reduce((total, item) => total + (item.price * item.quantity), 0));
    const dispatch = useDispatch();

    const handleRemove = (id) =>{
        dispatch(removeItem(id))
        toast.success("Item has been removed")
    }

    const handleIncreaseQuantity = (id) => {
        dispatch(increaseQuantity(id));
    };

    const handleDecreaseQuantity = (id) => {
        dispatch(decreaseQuantity(id));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
        toast.success("Cart is Cleared")
    };


    return (
        <div className='w-full min-h-screen bg-gray-100 p-5'>

            <h1 className='text-2xl font-semibold mb-4'>Cart Items</h1>

            {
                items.length === 0 ? <h1 className='text-xl text-center w-full font-semibold'>No Items to Display</h1> : (
                    items.map((item) => {
                        return (
                            <div key={item.id} className='w-full my-3 bg-white gap-3 flex justify-between items-center rounded-md px-4 py-2'>
                                <img src={item.image} className='w-[65px] h-[65px]' alt="" />
                                <h3 className='font-semibold text-lg'>{item.title.slice(0, 10)}..</h3>
                                <p className='font-[500]'>${Math.floor(item.price)}</p>
                                <div className='flex gap-3 items-center'>
                                    <button onClick={() => handleIncreaseQuantity(item.id)} className='py-1 px-3 text-lg font-semibold rounded text-white bg-violet-500 hover:bg-violet-700 transition-all duration-150 focus:outline-none'>+</button>
                                    <p className='font-semibold'>{item.quantity}</p>
                                    <button onClick={() => handleDecreaseQuantity(item.id)} className='py-1 px-3 text-lg font-semibold rounded text-white bg-violet-500 hover:bg-violet-700 transition-all duration-150 focus:outline-none'>-</button>
                                </div>
                                <button onClick={()=> handleRemove(item.id)} className='py-1 px-3 font-semibold rounded text-white bg-red-500 hover:bg-red-700 transition-all duration-150 focus:outline-none'>Remove</button>
                            </div>
                        )
                    })
                )
            }

            <div className='fixed right-0 bottom-2 bg-gray-100 z-20 left-0'>
                <hr className='w-[95%] m-auto'/>
                <div className=' flex justify-between items-center p-3'>
                    <button onClick={handleClearCart} className='py-1 px-3 font-semibold rounded text-white bg-red-500 hover:bg-red-700 transition-all duration-150 focus:outline-none'>Clear Cart</button>
                    <p className='text-xl font-semibold'>Total : ${Math.floor(totalPrice)}</p>
                </div>
            </div>

        </div>
    )
}