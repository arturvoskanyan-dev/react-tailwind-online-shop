import React, { useEffect, useState } from 'react'
import { FaStar, CustomButton, FaRegHeart, BsTruck, FiRefreshCcw } from "../../components/index"
import { useParams } from 'react-router-dom'

export default function Product() {
    let { id } = useParams();
    const [product, setProduct] = useState([]);
    const stars = [];

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(res => setProduct({ ...res, count: 1 }));
    }, [])

    for (let i = 0; i < Math.round(product.rating); i++) {
        stars.push(<span key={i}><FaStar className='text-star' /></span>)
    }

    const increment = () => {
        setProduct((prev) => {
            return { ...prev, count: ++prev.count }
        })
    }

    const decrement = () => {
        setProduct(prev => ({
            ...prev,
            count: prev.count > 1 ? --prev.count : prev.count
        }));
    }

    return (
        <section className='container py-8'>
            <section className='flex justify-around items-center gap-16'>
                <div>
                    <div className='p-2 font-medium'>
                        <span className='text-gray-600 text-lg'>{product.category} / {product.brand} / </span>
                        <span>{product.title}</span>
                    </div>
                    <img
                        src={product.thumbnail}
                        className='w-product-image bg-secondary cursor-pointer hover:shadow-lg duration-300'
                    />
                </div>
                <div className='grid gap-2'>
                    <h1 className='text-2xl font-medium'>{product.title}</h1>
                    <div className='flex items-center'>
                        {stars}
                        <p className='text-gray-500'>({product.rating})</p>
                        <div className='ml-4'>
                            <h1 className='text-button1'>{product.availabilityStatus}</h1>
                        </div>
                    </div>
                    <p className='text-2xl'>${product.price}</p>
                    <p className='max-w-md border-b-2 border-gray-500 my-2'>{product.description}</p>
                    <div className='flex items-center gap-8 text-xl'>
                        <div className='flex gap-4 border-2 border-gray-500'>
                            <button
                                onClick={decrement}
                                className='w-plus-minus border-r-2 border-gray-500 cursor-pointer'
                            >-
                            </button>
                            <h1>{product.count}</h1>
                            <button
                                onClick={increment}
                                className='w-plus-minus text-white bg-button2 cursor-pointer'
                            >+</button>
                        </div>
                        <CustomButton bg="button2" color="white" product={product}>Buy Now</CustomButton>
                        <button className='border-2 border-gray-500 p-1 rounded-md'>
                            <FaRegHeart className='text-2xl cursor-pointer' />
                        </button>
                    </div>
                    <div className='font-medium'>
                        <div className='product_icon'>
                            <BsTruck className='text-4xl' />
                            <span>
                                <h3 className='text-xl'>Free Delivery</h3>
                                <p className='underline'>Enter you postal code for Delivery Abaibility</p>
                            </span>
                        </div>
                        <div className='product_icon border-t-0'>
                            <FiRefreshCcw className='text-4xl' />
                            <span>
                                <h3 className='text-xl'>Return Delivery</h3>
                                <p>Free 30 Days Delivery Returns. <span className='underline'>Details</span></p>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
