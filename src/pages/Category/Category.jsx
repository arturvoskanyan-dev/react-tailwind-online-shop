import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/Card';

export default function Category({ buy }) {
    const [category, setCategory] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${name}`)
            .then(res => res.json())
            .then((res) => setCategory(res.products))
    }, [name])

    return (
        <section className='container'>
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
                                buy={buy}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}
