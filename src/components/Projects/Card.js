import React from "react"

const Card = ({ heading, paragraph, image, url, github }) => {
  return (
    <div>
      <img
        className="img-fluid rounded mx-auto d-block"
        src={image}
        alt='projects'
      />
        <div className="content">
          <h1 className="header">{heading}</h1>
          <p className="text">{paragraph}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Deployed
        </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Github
        </a>
        </div>
    </div>
  )
}

export default Card