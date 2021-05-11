import React from 'react'

function Card({ image, title }) {
    return (
        <div>
            <img
                className='img-fluid rounded mx-auto d-block'
                src={image}
                alt='skills'
            />
            <div className='content'>
                <h2>{title}</h2>
            </div>
        </div>
    )
}

export default Card
