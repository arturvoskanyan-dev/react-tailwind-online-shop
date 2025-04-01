import React, { useState } from 'react'
import { GrLinkPrevious, GrLinkNext } from "../index"
import { NavLink } from 'react-router-dom';

export default function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex(prevIndex => prevIndex === images.length - 1 ? 0 : prevIndex + 1)
    }

    const prevImage = () => {
        setCurrentIndex(prevIndex => prevIndex === 0 ? images.length - 1 : prevIndex - 1)
    }

    return (
        <section className='flex justify-center items-center bg-black text-white relative'>
            <button onClick={prevImage} className='arrow-button left-4'><GrLinkPrevious /></button>
            <div className='flex justify-between items-center gap-10'>
                <div>
                    <h4 className='max-w-[250px] text-gray-200 text-lg'>{images[currentIndex]?.title}</h4>
                    <p className='max-w-[250px] text-5xl'>Up to 10% off Voucher</p>
                    <span className='shop-now flex items-center gap-2 pt-4'>Shop Now <GrLinkNext /> </span>
                </div>
                <NavLink to={`/product/${images[currentIndex]?.id}`}>
                    <img 
                        src={images[currentIndex]?.thumbnail} 
                        className='drop-shadow-[0_0_10px_white] cursor-pointer hover:drop-shadow-[0_0_20px_white] duration-300' 
                    />
                </NavLink>
            </div>
            <button onClick={nextImage} className='arrow-button right-4'><GrLinkNext /></button>
        </section>
    )
}
