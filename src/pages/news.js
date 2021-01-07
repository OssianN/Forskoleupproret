import React from 'react'
import NavBar from '../components/nav-bar/NavBar';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby'

const Press = () => {

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
      }
    `
  );

  console.log(data.allContentfulBlogPost.edges[0])

  return (
    <div className='news'>
      <NavBar />
      <div className='tabContent'>
        <h1 className='tabHeader'>
          Nyheter från Förskoleupproret
        </h1>
        <ul className='articleUl'>
          <h2>Artiklar</h2>
          {data.allContentfulBlogPost.edges.map(post => {
            return (
              <li key={post.node.id}>
                <Link to={`/${post.node.slug}`}>
                  <h3>{ post.node.title }</h3>
                  <p>{ post.node.description }</p>
                </Link>
                <img src={post.node.contentImage.file.url } alt={post.node.contentImage.title}></img>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  )
}

export default Press;