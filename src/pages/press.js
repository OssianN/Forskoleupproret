import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import ContentfulList from "../components/press/ContentfulList"
import CategoryNavigation from "../components/press/CategoryNavigation"

const Press = () => {
  const [showArticleList, setShowArticleList] = useState("Nyheter")

  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost {
          nodes {
            id
            vittnesmal
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
        allContentfulPublicerade {
          nodes {
            id
            publishedDate
            url
            title
          }
        }
      }
    `
  )

  const handleArticleListPick = e => {
    setShowArticleList(e.target.innerHTML)
  }

  const filteredData = data.allContentfulBlogPost?.nodes.filter(
    post => !post.slug.includes("dummy9211")
  )

  const articles = filteredData.filter(post => !post.vittnesmal)
  const vittnesmal = filteredData.filter(post => post.vittnesmal)
  const published = filteredData.allContentfulPublicerade?.nodes

  return (
    <Layout>
      <main className="press__container">
        <CategoryNavigation
          handleArticleListPick={handleArticleListPick}
          showArticleList={showArticleList}
        />

        <ContentfulList
          showArticleList={showArticleList}
          header="Nyheter"
          data={articles}
        />
        <ContentfulList
          showArticleList={showArticleList}
          header="Vittnesmål"
          data={vittnesmal}
        />
        <ContentfulList
          showArticleList={showArticleList}
          header="Publicerat"
          data={published}
        />
      </main>
    </Layout>
  )
}

export default Press
