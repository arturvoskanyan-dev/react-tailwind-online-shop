import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { API } from '../../api/api';
import { initState, reducer } from '../../store/store';

export default function Category({theme}) {
    const [state, dispatch] = useReducer(reducer, initState)
    const { name } = useParams();

    useEffect(() => {
        API.getCategory(dispatch, name)
    }, [name])

    return (
        <section className='container pt-4'>
            <h1 className={`p-4 text-2xl ${theme === "dark" ? "text-gray-300" : "text-gray-700"} font-medium`}>Total quantity({state.category.length})</h1>
            <div className='flex justify-between flex-wrap pt-4'>
                {
                    state.category?.map((product) => {
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
