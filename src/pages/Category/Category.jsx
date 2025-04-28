import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { categoryAPI } from '../../store/slices/category/categoryAPI';

export default function Category({theme}) {
    const {category} = useSelector((state) => state.category)
    const { name } = useParams();
    const myDispatch = useDispatch()
;
    useEffect(() => {
        myDispatch(categoryAPI(name))
    }, [name])
    
    return (
        <section className='container pt-4'>
            <h1 className={`p-4 text-2xl ${theme === "dark" ? "text-gray-300" : "text-gray-700"} font-medium`}>Total quantity({category?.length})</h1>
            <div className='flex justify-between flex-wrap pt-4'>
                {
                    category?.map((product) => {
                        return (
                            <Card
                                key={product.id}
                                id={product.id}
                                thumbnail={product.thumbnail}
                                title={product.title}
                                price={product.price}
                                rating={product.rating}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}
