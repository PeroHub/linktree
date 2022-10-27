import React from 'react'
import './profile.css'
import share from '../../image/share.png'

export default function Profile({data}) {
    console.log(data)
  return (
    <div className='profile-main'>
        <img className='share' src={share} alt="share" />
        <div id='profile__img' className='img-container'>
            <img src={data[0].image} alt="Peter Ime" />
            
        </div>
        <p id='twitter'>{data[0].twitterUsername}</p>
        <p id='slack'>{data[0].slackName}</p>
    </div>
  )
}
