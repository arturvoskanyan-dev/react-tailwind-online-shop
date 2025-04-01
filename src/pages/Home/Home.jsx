import React, { useEffect, useState } from 'react'
import { Card, Rectangle, CustomButton, CategoryLink, Carousel } from "../index"

export default function Home({ flashSales, buy }) {
  const [images, setImages] = useState([]);
  const categories = ["Women's dresses", "Men's shirts", "Mobile accessories", "Kitchen accessories",
    "Sports accessories", "Smartphones", "Home decoration", "furniture", "beauty"];

  useEffect(() => {
    Promise.all([
      fetch(`https://dummyjson.com/products/99?select=thumbnail,title`),
      fetch(`https://dummyjson.com/products/93?select=thumbnail,title`),
      fetch(`https://dummyjson.com/products/79?select=thumbnail,title`),
      fetch(`https://dummyjson.com/products/193?select=thumbnail,title`),
    ]).then((res) => Promise.all(res.map(r => r.json())))
      .then((res) => setImages(res))
  }, [])

  return (
    <section className='container'>
      <div className="p-4 flex items-center">
        <ul className="border-r-2 border-gray-300 min-w-[200px]">
          {categories.map((category, index) => (
            <CategoryLink key={index} category={category} />
          ))}
        </ul>
        <div className="flex-1 flex justify-center">
          <div className="w-[892px]">
            <Carousel images={images} />
          </div>
        </div>
      </div>
      <section className='py-15'>
        <div className='flex flex-col gap-4 pl-4 '>
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
          <CustomButton bg='button2' color="white" >View All Products</CustomButton>
        </div>
      </section>
    </section>
  )
}
