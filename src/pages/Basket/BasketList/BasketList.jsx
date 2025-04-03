import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { MyContext } from '../../../App';

export default function BasketList({id, thumbnail, title, price, count, increment, decrement}) {
    const theme = useContext(MyContext).theme;
    
    return (
        <section className={`flex justify-between items-center px-4 ${theme === "dark" ? "shadow-xs shadow-gray-700" : "shadow-md"} rounded-xl`}>
            <NavLink to={`/product/${id}`} className="flex items-center">
                <img
                    src={thumbnail}
                    className='w-basket-image'
                />
                <span className='font-medium'>{title}</span>
            </NavLink>
            <p>${price}</p>
            <div className='flex gap-4 border-2 border-gray-500'>
                <button
                    onClick={() => decrement(id)}
                    className='w-plus-minus border-r-2 border-gray-500 cursor-pointer'
                >-
                </button>
                <h1>{count}</h1>
                <button className='w-plus-minus text-white bg-button2 cursor-pointer' onClick={() => increment(id)}>+</button>
            </div>
            <span>$ {parseInt(price * count)}</span>
        </section>
    )
}
