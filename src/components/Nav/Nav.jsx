import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { LuSearch, FaRegHeart, IoCartOutline, MdOutlineLightMode, MdOutlineDarkMode } from "../index"
import { MyContext } from '../../App'

export default function Nav() {
    const {changeTheme} = useContext(MyContext);
    const {theme} = useContext(MyContext);

    return (
        <nav className={`container flex justify-between items-center p-4 ${theme === "dark" ? "bg-dark-bg" : "bg-white"} z-10`}>
            <figure>
                <h1 className='text-3xl font-bold cursor-pointer'>Exclusive</h1>
            </figure>
            <section className='w-sm'>
                <ul className='flex justify-around text-lg cursor-pointer nav-item'>
                    <NavLink to="/">
                        <li>Home</li>
                    </NavLink>
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
                        className={`w-60 p-2 text-base ${theme === "dark" ? "bg-dark-secondary" : "bg-secondary"} border-2 rounded-sm shadow-xl`}
                    />
                    <LuSearch className='absolute right-2 text-xl' />
                </div>
                <FaRegHeart className='text-2xl' />
                <NavLink to="/basket">
                    <IoCartOutline className='text-3xl' />
                </NavLink>
                {
                    theme === "light"
                    ? <MdOutlineDarkMode onClick={changeTheme} className='text-3xl' />
                    : <MdOutlineLightMode onClick={changeTheme} className='text-3xl' />
                }
            </section>
        </nav>
    )
}
