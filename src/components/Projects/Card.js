import React from "react"

const Card = ({ title, description, image, url, github }) => {
  return (
    <div>
      <a
        href={url}
        target='_blank'
        rel='noreferrer'
      >
        <img
          className="img-fluid rounded mx-auto"
          src={image}
          alt='projects'
        />
      </a>
      <div className="content">
        <h1 className="header">{title}</h1>
        <p className="text">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Deployed
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Github
        </a>
      </div>
    </div>
  )
}

export default Card