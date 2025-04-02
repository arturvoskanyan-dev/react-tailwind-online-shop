import React, { useContext } from 'react'
import { MyContext } from '../../App'

export default function CustomButton({ navigate, product, bg, color, children }) {
  let click = useContext(MyContext).buy;

  return (
    <button
      onClick={() => {children !== "Return To Shop" ? click(product) : navigate()}}
      className={`custom-button w-custom-button bg-${bg} text-${color} border-2 hover:bg-hover-button hover:text-white`}>
      {children}
    </button>
  )
}
