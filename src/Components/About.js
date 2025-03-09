import React from 'react'
import AboutBackground from "../Assets/about-background.png"
import AboutBackgroundImage from "../Assets/about-background-image.png"
import { BsFillPlayCircleFill } from 'react-icons/bs'

function About() {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt=''></img>
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt='' />
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>
                Food is an important part of a Balance Diet.
            </h1>
            <p className='primary-text' >
                Hellow world why you don't care about food which is essential part of our life.
                Doller ipsum and other world is same as you want. but one thing for sure is it
                important.
            </p>
            <p className='primary-text'>
                Hellow world why you don't care about food which is essential part of our life.
                Doller ipsum and other world is same as you want. but one thing for sure is it
                important.
            </p>
            <div className='about-buttons-container'>
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'><BsFillPlayCircleFill/> Watch video</button>
            </div>
        </div>
    </div>
  )
}

export default About