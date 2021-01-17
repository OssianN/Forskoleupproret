import React from "react";
import { graphql } from "gatsby";
import NavBar from '../components/nav-bar/NavBar';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const query = graphql`
  query($slug: String!) {
    post: contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
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
  const post = data.post;
  return (
    <div className="articleTemplate">
      <NavBar />
      <div className='tabContent'>
        <div className='firstSection'>
          <h1>{ post.title }</h1>
          <img className='contentImage' src={ post.contentImage.file.url } alt='content'></img>
          <div>{ documentToReactComponents(JSON.parse(post.mainText.raw)) }</div>
          <div className='authorImage' >
            <img src={ post.authorImage.file.url } alt={post.authorImage.title}></img>
            <h4>{ post.authorImage.title }</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTemplate;
