import React from 'react'
import './profile.css'
import share from '../../image/share.png'
import shareArrow from '../../image/shareArrow.png'

export default function Profile({data}) {
    console.log(data)
  return (
    <div className='profile-main'>
       <img className='shareArrow' src={shareArrow} alt="share arrow" />
        <img className='share' src={share} alt="share" />
        <div  className='img-container'>
            <img id='profile__img' src={data[0].image} alt="Peter Ime" />
            
        </div>
        <p id='twitter'>{data[0].twitterUsername}</p>
        <p id='slack'>{data[0].slackName}</p>
    </div>
  )
}
