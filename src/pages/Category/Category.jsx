import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/Card';

export default function Category() {
    const [category, setCategory] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${name}`)
            .then(res => res.json())
            .then((res) => setCategory(res.products))
    }, [name])

    return (
        <section className='container pt-4'>
            <h1 className='p-4 text-2xl text-gray-700 font-medium'>Total quantity({category.length})</h1>
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
