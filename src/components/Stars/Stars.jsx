import React from 'react'
import { FaStar } from "react-icons/fa";

export default function Stars({theme, rating}) {
    const stars = [];

    for (let i = 0; i < Math.round(rating); i++) {
        stars.push(<span key={i}><FaStar className={`${theme === "dark" ? "text-dark-star" : "text-star"}`} /></span>)
    }

    return stars
}
