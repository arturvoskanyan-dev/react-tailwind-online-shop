import React from 'react'

export default function ViewButton({children}) {
  return (
    <button className='p-3 w-view-button bg-button2 text-white font-medium rounded-md cursor-pointer hover:bg-hover-button duration-300'>
        {children}
    </button>
  )
}
