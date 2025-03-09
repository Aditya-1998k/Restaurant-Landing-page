import React from 'react';
import PickMeals from '../Assets/pick-meals-image.png'
import ChooseMeals from '../Assets/choose-image.png'
import DeliverMeals from '../Assets/delivery-image.png'

const Work = () => {
    const WorkInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Lorem Ipsum dolar sit amet consectur. meacn orci at sagitting duis elshgien iterdum facilist bibendum."
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "Lorem Ipsum dolar sit amet consectur. meacn orci at sagitting duis elshgien iterdum facilist bibendum."
        },
        {
            image: DeliverMeals,
            title: "Fast Deliveries",
            text: "Lorem Ipsum dolar sit amet consectur. meacn orci at sagitting duis elshgien iterdum facilist bibendum."
        }
    ]
    return (
        <div className='work-section-wrapper'>
            <div className='work-section-top'>
                <p className='primary-subheading'>Work</p>
                <h1 className='primary-heading'> How It work</h1>
                <p className='primary-text'>
                    Lorem Ipsum dolar sit amet consectur. meacn orci at sagitting duis elshgien iterdum facilist bibendum.
                    Lorem Ipsum dolar sit amet consectur. meacn orci at sagitting duis elshgien iterdum facilist bibendum.
                </p>
            </div>
            <div className='work-section-bottom'>
                {
                    WorkInfoData.map((data) => (
                        <div className='work-section-info'>
                            <div className='info-boxes-img-container'>
                                <img src={data.image} alt=''></img>
                            </div>
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Work