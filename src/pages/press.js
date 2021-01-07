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

  return (
    <div className='press'>
      <NavBar />
      <div className='tabContent'>
        <div className='articleListContainer'>
        <h1 className='tabHeader'>
          Press
        </h1>
          <h2>Egan artiklar</h2>
          <ul className='articleUl'>
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
        <div className='articleListContainer2'>
          <h2>Egna artiklar (publicerade)</h2>
          <h2>Omnämnda</h2>
        </div>
      </div>
    </div>
  )
}

export default Press;