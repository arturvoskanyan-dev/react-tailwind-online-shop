import React from 'react'
import { LuSearch, FaRegHeart, IoCartOutline } from "../index"

export default function Nav() {
    return (
        <nav className='container flex justify-between items-center p-4 bg-white'>
            <figure>
                <h1 className='text-3xl font-bold cursor-pointer'>Exclusive</h1>
            </figure>
            <section className='w-sm'>
                <ul className='flex justify-around text-lg cursor-pointer nav-item'>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Sign Up</li>
                </ul>
            </section>
            <section className='flex justify-around gap-6 items-center cursor-pointer'>
                <div className='flex items-center relative'>
                    <input
                        type="text"
                        placeholder='What are you looking for?'
                        className='w-60 p-2 text-base bg-secondary border-2 rounded-sm shadow-xl'
                    />
                    <LuSearch className='absolute right-2 text-xl' />
                </div>
                <FaRegHeart className='text-2xl' />
                <IoCartOutline className='text-3xl' />
            </section>
        </nav>
    )
}
