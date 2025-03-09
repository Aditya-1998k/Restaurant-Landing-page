import React from 'react'
import BannerBackground from "../Assets/home-banner-background.png"
import BannerImage from "../Assets/home-banner-image.png"
import { FiArrowDownRight } from 'react-icons/fi'

const Home = () => {
  return (
    <div className='home-container'>
        <div className='home-banner-container'>
            <div className='home-bannerImage-container'>
                <img src={BannerBackground} alt='' />
            </div>
            <div className='home-text-section'>
                <h1 className='primary-heading'>
                    Your Favourite Food Delievered Hot & Fresh
                </h1>
                <p className='primary-text'>
                    Healthy switcher chefs do all the prep work, like peeding,
                    choping and marinating, so you can cook a fresh food.
                </p>
                <button className='secondary-button'>
                    Order Now <FiArrowDownRight/>
                </button>
            </div>
            <div className='home-image-container'>
                <img src={BannerImage} alt=''></img>
            </div>
        </div>
    </div>
  )
}

export default Home