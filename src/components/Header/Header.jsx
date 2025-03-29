import React from 'react'
import Nav from '../Nav/Nav'

export default function Header() {
  return (
    <header>
      <section className='flex justify-center p-4 w-full bg-black'>
        <div className='text-white'>
            <p>Summer Sale for All Swim Suits And Free Express Delivery - OFF 50%!
                <span className='ml-2 font-bold underline decoration-2 cursor-pointer'>ShopNow</span>
            </p>
        </div>
      </section>
      <Nav />
    </header>
  )
}
