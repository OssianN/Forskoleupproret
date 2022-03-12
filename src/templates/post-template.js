import React from "react"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import VideoIframe from "../components/VideoIframe/VideoIframe"
import Layout from "../components/Layout"

export const query = graphql`
  query($slug: String!) {
    post: contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      videoLink
      authorImage {
        file {
          url
        }
        title
      }
      contentImage {
        file {
          url
        }
        title
      }
      mainText {
        raw
      }
    }
  }
`

const PostTemplate = ({ data }) => {
  const post = data.post
  const img = post.contentImage

  return (
    <Layout>
      <div className="article__container">
        <header className="main-header">
          <Link to="/press" className="article__back-button">
            &#x2039; Back to Press
          </Link>
          <h1 className="main-header__h1 article__heading">{post.title}</h1>

          <div className="main-header__hero-img">
            <VideoIframe thumb={img.file.url} video={post.videoLink} />
          </div>
        </header>

        <div className="article__text-content">
          {documentToReactComponents(JSON.parse(post.mainText.raw))}
        </div>
        <div className="author__container">
          <img
            className="author__img"
            src={post.authorImage.file.url}
            alt={post.authorImage.title}
          ></img>
          <h4 className="author__title">{post.authorImage.title}</h4>
        </div>
      </div>
    </Layout>
  )
}

export default PostTemplate
