import React from "react"
import { Link } from "gatsby"

const HomeArticle = ({ link, title, desc, img, imgName }) => {
  return (
    <article className="home-box">
      <Link to={link} className="home-box__link">
        <img className="home-box__img" src={img} alt={imgName} />
        <footer className="home-box__text-container">
          <h2 className="main-h2 home-box__title-h2">{title}</h2>
          <p className="home-box__paragraph main-p">{desc}</p>
        </footer>
      </Link>
    </article>
  )
}

export default HomeArticle
