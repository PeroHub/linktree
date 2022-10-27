import React from 'react'
import './link.css'

export default function Link({data}) {
  return (
    <div className='link'>
      {data.map((item, index) => (

      <div key={index} style={{marginTop: "15px"}}>
        <a key={index}>
          <button id={item.id}>{item.name}</button>
        </a>
      </div>
      ))}
    </div>
  )
}
