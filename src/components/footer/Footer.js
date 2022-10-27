import React from 'react'
import './footer.css'
import zuri from '../../image/zuri.png'
import ingressive from '../../image/ingressive.png'

export default function Footer() {
  return (
    <div className='footer-container'>
      <img src={zuri} alt="zuri" />
      <span>HNG Internship 9 Frontend task</span>
      <img src={ingressive} alt="ingressive" />

    </div>
  )
}
