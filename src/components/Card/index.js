import React from 'react'
import './style.scss'

function Card({ title, description, image, url, github}) {
    return (
        <div
            className="card"
            style={{
                backgroundImage:
                'linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)).url(' + image + ')'.
            }}
        >
            <div className="content">
                <h1 className="header">{title}</h1>
                <p className="text">{description}</p>
                <a
                    href={url ? url : "#"}
                    target="_blank"
                    rel="nofererrer"
                    className="btn"
                >
                    Explore
                </a>
            </div>
        </div>
    )
}

export default Card
