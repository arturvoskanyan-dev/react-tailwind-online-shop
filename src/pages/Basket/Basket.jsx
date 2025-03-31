import React, { useState } from 'react'
import BasketList from './BasketList/BasketList';
import BasketFooter from './BasketFooter/BasketFooter';

export default function Basket({ }) {
    const [products, setProduct] = useState(JSON.parse(localStorage.getItem("data")));

    const increment = (id) => {
        setProduct((prevItems) => {
            const updatedData = prevItems.map((elem) =>
                elem.id === id
                    ? {
                        ...elem,
                        count: ++elem.count
                    }
                    : elem
            )
            localStorage.setItem("data", JSON.stringify(updatedData))
            return updatedData
        })
    }

    const decrement = (id) => {
        setProduct((prevItems) => {
            const updatedData = prevItems.map((elem) =>
                elem.id === id && elem.count > 1
                    ? {
                        ...elem,
                        count: --elem.count
                    }
                    : elem
            )
            localStorage.setItem("data", JSON.stringify(updatedData))
            return updatedData
        })
    }

    return (
        <div className='container p-8'>
            <div className='grid gap-8'>
                {
                    products?.map((product) => {
                        return (
                            <BasketList
                                id={product.id}
                                key={product.id}
                                thumbnail={product.thumbnail}
                                title={product.title}
                                price={product.price}
                                count={product.count}
                                increment={increment}
                                decrement={decrement}
                            />
                        )
                    })
                }
            </div>
            <BasketFooter products={products} />
        </div>
    )
}
