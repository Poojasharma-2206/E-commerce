import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className="news-letter">
      <h1>Get Exclusive Offers In your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email id" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}
