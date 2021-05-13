import React from 'react'
import './style.scss';

function Card({ image, title }) {
    return (
        <div className='cards' >
            <img
                className='image'
                src={image}
                alt='skills'
            />
            <div className='content'>
                <h5>{title}</h5>
            </div>
        </div>
    )
}

export default Card
