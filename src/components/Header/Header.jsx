import React from 'react'
import Nav from '../Nav/Nav'

export default function Header() {
  return (
    <header className='sticky top-0 left-0 right-0 z-10'>
      <section className='flex justify-center p-4 w-full relative bg-black'>
        <div className='text-white'>
          <p>
            Summer Sale for All Swim Suits And Free Express Delivery - OFF 50%!
            <span className='shop-now'>
              ShopNow
            </span>
          </p>
        </div>
      </section>
      <Nav />
      <div className="w-full border-2 border-gray-300"></div>
    </header>
  );
}
