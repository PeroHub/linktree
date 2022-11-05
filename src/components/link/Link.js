import React from 'react'
import './link.css'

export default function Link({data}) {
  return (
    <div className='link'>
      {data.map((item, index) => (

      <div key={index} className='sub-con' >
        <a  id={item.id} key={index} href={item.link}>
          <div className='btn'>

          <p>{item.name}</p>
          <p>{item.subText ? item.subText : ""}</p>
          </div>
        </a>
      </div>
      ))}
    </div>
  )
}
