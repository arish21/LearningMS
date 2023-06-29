import React from 'react'
import "../../styles/Home.css";



//event handler function for Home Button
export function Home() {
  return (
    <div className='headerForHomePage' id='home'>
      <div className='headerForHomeContent'>
        <h1 className='TitleText'>Online Learning Platform</h1>
        <h2 className='MottoText'>One stop shop for all your online learning!</h2>
      </div>
    </div>
  )
}


