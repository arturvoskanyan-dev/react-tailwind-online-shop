import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CategoryLink({category}) {
    const formatCategory = category.toLowerCase().replace(" ", "-").replace("'", "")

    return (
        <NavLink to={`/category/${formatCategory}`}>
            <li className='leading-8 text-lg font-normal cursor-pointer hover:text-red-600'>{category}</li>
        </NavLink>
    )
}
