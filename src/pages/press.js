import React, { useState } from 'react'
import NavBar from '../components/nav-bar/NavBar';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby'

const Press = () => {
  const [showArticleList, setShowArticleList] = useState('Nyheter');

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
  );

  const handleArticleListPick = e => {
    setShowArticleList(e.target.innerHTML);
  };

  const limitTitle = title => {
    let newTitle = '';
    if (title.length > 70) {
      newTitle = `${title.slice(0, 65)}...`
    } else {
      newTitle = title;
    };
    return newTitle;
  };
  
  const published = data.allContentfulPublicerade?.edges;
  const omnamnda = data.allContentfulOmnamnda?.edges;

  return (
    <div className='press'>
      <NavBar />
      <div className='tabContent'>
        <div className='listCategory'>
          <h3 
            className='listHeader'
            onClick={handleArticleListPick}
            style={ showArticleList === 'Nyheter'
              ? {color: '#F58124', pointerEvents: 'none'}
              : {color: 'black', cursor: 'pointer'}}>
            Nyheter
          </h3>
          <h3 
            className='listHeader'
            onClick={handleArticleListPick}
            style={ showArticleList === 'Publicerade'
              ? {color: '#F58124', pointerEvents: 'none'}
              : {color: 'black', cursor: 'pointer'}}>
            Publicerade
          </h3>
          <h3
            className='listHeader'
            onClick={handleArticleListPick}
            style={showArticleList === 'Omnämnda'
            ? {color: '#F58124', pointerEvents: 'none'}
            : {color: 'black', cursor: 'pointer'}}>
            Omnämnda
          </h3>
        </div>
        <div className='firstSection'>
          <ul className='contentfulList' style={showArticleList === 'Nyheter' ? {display: 'block'} : {display: 'none'}}>
          <h1 className='tabHeader'>Nyheter</h1>
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
          <ul id='published' className='contentfulList' style={showArticleList === 'Publicerade' ? {display: 'block'} : {display: 'none'}}>
            <h1 className='tabHeader'>Publicerade</h1>
            {published?.map(link => {
              return (
                <li key={link.node.id}>
                  <Link to={link.node.url}>
                    <div className='articleLinkText'>
                      <h2>{link.node.title}</h2>
                      <p>{link.node.publishedDate}</p>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
          <ul i='omnämnda' className='contentfulList' style={showArticleList === 'Omnämnda' ? {display: 'block'} : {display: 'none'}}>
            <h1 className='tabHeader'>Omnämnda</h1>
            {omnamnda?.map(link => {
                return (
                  <li key={link.node.id}>
                    <Link to={link.node.url}>
                      <div className='articleLinkText'>
                        <h2>{link.node.title}</h2>
                        <p>{link.node.publishedDate}</p>
                      </div>
                    </Link>
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Press;