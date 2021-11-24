import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import ContentfulList from "../components/press/ContentfulList"

const Press = () => {
  const [showArticleList, setShowArticleList] = useState("Nyheter")

  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost {
          edges {
            node {
              id
              slug
              title
              publishDate
              authorImage {
                file {
                  url
                }
                title
              }
              mainText {
                raw
              }
              description
              contentImage {
                file {
                  url
                }
                title
              }
            }
          }
        }
        allContentfulOmnamnda {
          edges {
            node {
              id
              publishedDate
              title
              url
            }
          }
        }
        allContentfulPublicerade {
          edges {
            node {
              id
              publishedDate
              url
              title
            }
          }
        }
      }
    `
  )

  const handleArticleListPick = e => {
    setShowArticleList(e.target.innerHTML)
  }

  const articles = data.allContentfulBlogPost?.edges
  const published = data.allContentfulPublicerade?.edges
  const omnamnda = data.allContentfulOmnamnda?.edges

  return (
    <Layout>
      <main className="press__container">
        <div className="press__categories-list">
          <button
            className="press__category-button"
            onClick={handleArticleListPick}
            style={
              showArticleList === "Nyheter"
                ? { color: "#ff9f50", pointerEvents: "none" }
                : { color: "black", cursor: "pointer" }
            }
          >
            Nyheter
          </button>
          <button
            className="press__category-button"
            onClick={handleArticleListPick}
            style={
              showArticleList === "Publicerade"
                ? { color: "#ff9f50", pointerEvents: "none" }
                : { color: "black", cursor: "pointer" }
            }
          >
            Publicerade
          </button>
          <button
            className="press__category-button"
            onClick={handleArticleListPick}
            style={
              showArticleList === "Omnämnda"
                ? { color: "#ff9f50", pointerEvents: "none" }
                : { color: "black", cursor: "pointer" }
            }
          >
            Omnämnda
          </button>
        </div>
        <ContentfulList
          showArticleList={showArticleList}
          header="Nyheter"
          data={articles}
        />
        <ContentfulList
          showArticleList={showArticleList}
          header="Publicerade"
          data={published}
        />
        <ContentfulList
          showArticleList={showArticleList}
          header="Omnämnda"
          data={omnamnda}
        />
      </main>
    </Layout>
  )
}

export default Press
