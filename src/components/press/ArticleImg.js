import React from "react"

const ArticleImg = ({ img }) => {
  return (
    <img
      className="press__contentful-img"
      src={post.node.contentImage.file.url}
      alt={post.node.contentImage.title}
    ></img>
  )
}

export default ArticleImg
