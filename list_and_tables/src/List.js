import React from 'react'

export default function List({groceryItems: {fruits} }) {
    
  return (
    <ul>
        {
            fruits.map((item, index) => <li key={index}>{item}</li>)
        }
    </ul>
  )
}
