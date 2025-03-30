import React from 'react'

export default function ViewButton({ click, product, children }) {
  return (
    <button
      onClick={() => click(product)}
      className='p-3 w-view-button bg-button2 text-white font-medium rounded-md cursor-pointer hover:bg-hover-button duration-300'>
      {children}
    </button>
  )
}
