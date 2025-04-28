import React, { useEffect } from 'react'
import { CustomButton, FaRegHeart, BsTruck, FiRefreshCcw, Stars } from "../../components/index"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { productAPI } from '../../store/slices/product/productAPI';
import {increment, decrement} from "../../store/slices/product/productSlice"

export default function Product({theme}) {
    let { id } = useParams();
    const {product} = useSelector((state) => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productAPI(id))
    }, [id])

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
                        className={`w-product-image ${theme === "dark" ? "bg-dark-secondary" : "bg-secondary"} cursor-pointer hover:shadow-lg duration-300`}
                    />
                </div>
                <div className='grid gap-2'>
                    <h1 className='text-2xl font-medium'>{product.title}</h1>
                    <div className='flex items-center'>
                        <Stars theme={theme} rating={product.rating} />
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
                                onClick={() => dispatch(decrement())}
                                className='w-plus-minus border-r-2 border-gray-500 cursor-pointer'
                            >-
                            </button>
                            <h1>{product.count}</h1>
                            <button
                                onClick={() => dispatch(increment())}
                                className='w-plus-minus text-white bg-button2 cursor-pointer'
                            >+</button>
                        </div>
                        <CustomButton bg="button2" color="white" product={product}>Buy Now</CustomButton>
                        <button className='border-2 border-gray-500 p-1 rounded-md'>
                            <FaRegHeart className='text-2xl cursor-pointer' />
                        </button>
                    </div>
                    <div className={`${theme === "dark" ? "" : "font-medium"}`}>
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
