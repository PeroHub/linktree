import React from 'react'
import './profile.css'
import share from '../../image/share.png'

export default function Profile({data}) {
    console.log(data)
  return (
    <div className='profile-main'>
        <img className='share' src={share} alt="share" />
        <div className='img-container'>
            <img src={data[0].image} alt="Peter Ime" />
            
        </div>
        <p>{data[0].twitterUsername}</p>
        <p>{data[0].slackName}</p>
    </div>
  )
}
