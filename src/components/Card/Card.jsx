import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaStar, FaRegHeart, IoEyeOutline, IoCartOutline } from "../index";
import { MyContext } from '../../App';

export default function Card({ id, thumbnail, title, price, rating }) {
    const {buy} = useContext(MyContext);
    const {theme} = useContext(MyContext);
    let discount = Math.round(Math.random() * 45) + 10;
    const stars = [];

    for (let i = 0; i < Math.round(rating); i++) {
        stars.push(<span key={i}><FaStar className={`${theme === "dark" ? "text-dark-star" : "text-star"}`} /></span>)
    }

    return (
        <section className='p-4'>
            <div className='relative cursor-pointer text-white group'>
                <NavLink to={`/product/${id}`}>
                    <img
                        src={thumbnail}
                        className={`w-card-image p-7 ${theme === "dark" ? "bg-dark-secondary" : "bg-secondary"} rounded-lg`}
                    />
                </NavLink>
                <span className='absolute top-2 left-2 w-discount text-center bg-secondary2 rounded-sm'>
                    -{discount}%
                </span>
                <span className={`card_icon top-2 ${theme === "dark" && "text-white"}`}><FaRegHeart /></span>
                <span className={`card_icon top-8 ${theme === "dark" && "text-white"}`}><IoEyeOutline /></span>
                <button 
                onClick={() => buy({ id, thumbnail, title, price, rating, count: 1 })}
                className='w-full p-2 absolute bottom-0.25 bg-black cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <div className='flex justify-center items-center gap-2'>
                        <IoCartOutline className='text-xl' />
                        Add To Cart
                    </div>
                </button>
            </div>
            <div className='font-medium'>
                <h3 className='text-lg max-w-[200px]'>{title}</h3>
                <p className={`${theme === "dark" ? "text-dark-secondary2" : "text-secondary2" }`}>${price}</p>
                <span className='flex items-center justify-between'>
                    <div className='flex'>
                        {stars}
                    </div>
                    <p className={`${theme === "dark" ? "text-dark-rating" : "text-gray-700"}`}>({rating})</p>
                </span>
            </div>
        </section>
    )
}
