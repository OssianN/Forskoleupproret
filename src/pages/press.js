import React, { useState } from 'react'
import NavBar from '../components/nav-bar/NavBar';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout';

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
    <Layout>
      <div className='press__container'>
        <div className='press__categories-list'>
          <h3
            className='press__category-header'
            onClick={handleArticleListPick}
            style={ showArticleList === 'Nyheter'
              ? {color: '#ff9f50', pointerEvents: 'none'}
              : {color: 'black', cursor: 'pointer'}}>
            Nyheter
          </h3>
          <h3
            className='press__category-header'
            onClick={handleArticleListPick}
            style={ showArticleList === 'Publicerade'
              ? {color: '#ff9f50', pointerEvents: 'none'}
              : {color: 'black', cursor: 'pointer'}}>
            Publicerade
          </h3>
          <h3
            className='press__category-header'
            onClick={handleArticleListPick}
            style={showArticleList === 'Omnämnda'
            ? {color: '#ff9f50', pointerEvents: 'none'}
            : {color: 'black', cursor: 'pointer'}}>
            Omnämnda
          </h3>
        </div>
        <ul className='press__contentful-ul' style={showArticleList === 'Nyheter' ? {display: 'flex'} : {display: 'none'}}>
        <h1 className='main-header__h1 press__header__h1'>Nyheter</h1>
          {data.allContentfulBlogPost.edges?.map(post => {
            return (
              <li key={post.node.id} className='press__contentful-li'>
                <Link to={`/${post.node.slug}`} className='press__contentful-link' className='press__contentful-link'>
                  <img className='press__contentful-img' src={post.node.contentImage.file.url } alt={post.node.contentImage.title}></img>
                  <div className='press__contentful-text-wrapper'>
                    <h2 className='main-h2 press__contentful-title'>{ limitTitle(post.node.title) }</h2>
                    <p className='main-p'>{ post.node.description }</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className='press__contentful-ul' style={showArticleList === 'Publicerade' ? {display: 'flex'} : {display: 'none'}}>
          <h1 className='main-header__h1 press__header__h1'>Publicerade</h1>
          {published?.map(link => {
            return (
              <li key={link.node.id} className='press__contentful-li'>
                <Link to={link.node.url} className='press__contentful-link'>
                  <div className='press__contentful-text-wrapper'>
                    <h2 className='main-h2 press__contentful-title'>{link.node.title}</h2>
                    <p className='main-p'>{link.node.publishedDate}</p>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
        <ul className='press__contentful-ul' style={showArticleList === 'Omnämnda' ? {display: 'flex'} : {display: 'none'}}>
          <h1 className='main-header__h1 press__header__h1'>Omnämnda</h1>
          {omnamnda?.map(link => {
            return (
              <li key={link.node.id} className='press__contentful-li'>
                <Link to={link.node.url} className='press__contentful-link'>
                  <div className='press__contentful-text-wrapper'>
                    <h2 className='main-h2 press__contentful-title'>{link.node.title}</h2>
                    <p className='main-p'>{link.node.publishedDate}</p>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default Press;