import React from 'react'

export default function Arrival({ps5, woman, speakers, perfume}) {
  return (
    <div className='flex justify-center items-center gap-4 py-12 text-white'>
          <div className='relative'>
            <img src={ps5} className='bg-black w-[570px]'/>
            <div className='absolute left-6 bottom-6'>
              <h3 className='text-xl font-bold'>Playstation 5</h3>
              <p className='max-w-[250px]'>Black and White version of the PS5 coming out on sale.</p>
              <span className='shop-now'>Shop Now</span>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
              <div className='relative'>
                <img src={woman} className='w-[570px] h-[284px]' />
                <div className='absolute left-6 bottom-6'>
                  <h3 className='text-xl font-bold'>Women's Collections</h3>
                  <p className='max-w-[250px]'>Feautered woman collections that give you another vibe.</p>
                  <span className='shop-now'>Shop Now</span>
                </div>
              </div>
            <div className='flex gap-4'>
              <div className='relative'>
                <img src={speakers} className='bg-arrival-bg w-[270px] h-[284px]' />
                <div className='absolute bottom-6 left-6'>
                  <h3>Speakers</h3>
                  <p className='max-w-[200px]'>Amazon wireless speakers</p>
                  <span className='shop-now'>Shop Now</span>
                </div>
              </div>
              <div className='relative'>
                <img src={perfume} className='bg-arrival-bg w-[270px] h-[284px]' />
                <div className='absolute left-6 bottom-6'>
                  <h3>Perfume</h3>
                  <p className='max-w-[200px]'>GUCCI Intense OUD EDP</p>
                  <span className='shop-now'>Shop Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
