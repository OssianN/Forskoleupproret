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
        allContentfulOmnamnda {
          edges {
            node {
              id
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
        <div className='firstSection'>
          <h1 className='tabHeader'>Nyheter</h1>
          <ul className='articleUl'>
            {data.allContentfulBlogPost.edges?.map(post => {
              return (
                <li key={post.node.id}>
                  <Link to={`/${post.node.slug}`}>
                    <img src={post.node.contentImage.file.url } alt={post.node.contentImage.title}></img>
                    <div className='articleLinkText'>
                      <h3>{ limitTitle(post.node.title) }</h3>
                      <p>{ post.node.description }</p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='articleListContainer2'>
          <h1 className='tabHeader'>Publicerade artiklar</h1>
          <ul className='externalContentfulList'>
            {data.allContentfulPublicerade.edges?.map(link => {
              return (
                <li>
                  <Link to={link.node.url}>
                    <h2>{link.node.title}</h2>
                    <p>{link.node.publishedDate}</p>
                  </Link>
                </li>
              )
            })}
          </ul>
          <h1 className='tabHeader'>Omnämnda</h1>
        </div>
      </div>
    </div>
  )
}

export default Press;