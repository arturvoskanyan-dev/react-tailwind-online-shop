import React from 'react'

export default function BorderRow({label, value, border = true }) {
  return (
    <div className={`flex justify-between ${border ? "border-b-2 border-gray-500" : ""}`}>
      <span>{label}:</span>
      <span>{value}</span>
    </div>
  )
}
