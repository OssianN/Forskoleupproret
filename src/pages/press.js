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

  const limitTitle = title => {
    let newTitle = '';
    if (title.length > 70) {
      newTitle = `${title.slice(0, 65)}...`
    } else {
      newTitle = title;
    };
    return newTitle;
  };

  return (
    <div className='press'>
      <NavBar />
      <div className='tabContent'>
        <div className='articleListContainer'>
          <ul className='articleUl'>
          <h1 className='tabHeader'>Våra artiklar</h1>
            {data.allContentfulBlogPost.edges.map(post => {
              return (
                <li key={post.node.id}>
                  <Link to={`/${post.node.slug}`}>
                    <div className='articleLinkText'>
                      <h3>{ limitTitle(post.node.title) }</h3>
                      <p>{ post.node.description }</p>
                    </div>
                    <img src={post.node.contentImage.file.url } alt={post.node.contentImage.title}></img>
                  </Link>
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