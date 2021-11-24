import React from "react"
import { Link } from "gatsby"
import ArticleImg from "./ArticleImg"

const ContentfulList = ({ showArticleList, header, data }) => {
  const limitTitle = title => {
    let newTitle = ""
    if (title.length > 70) {
      newTitle = `${title.slice(0, 65)}...`
    } else {
      newTitle = title
    }
    return newTitle
  }

  return (
    <ul
      className="press__contentful-ul"
      style={
        showArticleList === header ? { display: "flex" } : { display: "none" }
      }
    >
      <h1 className="main-header__h1 press__header__h1">{header}</h1>
      {data?.map(post => {
        const img = post.node.contentImage
        return (
          <li key={post.node.id} className="press__contentful-li">
            <Link to={`/${post.node.slug}`} className="press__contentful-link">
              {img && <ArticleImg img={img} />}
              <div className="press__contentful-text-wrapper">
                <h2 className="main-h2 press__contentful-title">
                  {limitTitle(post.node.title)}
                </h2>
                <p className="main-p">{post.node.description}</p>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default ContentfulList
