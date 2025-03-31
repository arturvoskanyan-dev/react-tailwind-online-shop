import React from 'react'

export default function CustomButton({ click, product, bg, color, children }) {
  return (
    <button
      onClick={() => click(product)}
      className={`custom-button w-custom-button bg-${bg} text-${color} border-2 hover:bg-hover-button hover:text-white`}>
      {children}
    </button>
  )
}
