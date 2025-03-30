import React from 'react'
import { Card, Rectangle, ViewButton } from "../index"

export default function Home({ flashSales, buy }) {
  return (
    <section className='container'>
      <div className='flex flex-col gap-4 pl-4 pt-8'>
        <div className='flex items-center gap-4'>
          <img src={Rectangle} />
          <span className='text-secondary2 font-bold'>Today's</span>
        </div>
        <h1 className='text-4xl font-medium'>Flash Sales</h1>
      </div>
      <div className='flex justify-between pt-4'>
        {
          flashSales.map((product) => {
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
      <div className='p-8 text-center'>
        <ViewButton>View All Products</ViewButton>
      </div>
    </section>
  )
}
