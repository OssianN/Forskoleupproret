import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from "../components/Layout";

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
    <Layout>
      <div className='article__container'>
        <header className='main-header'>
          <h1 className='main-header__h1'>{ post.title }</h1>
          <img className='main-header__hero-img' src={ post.contentImage?.file.url } alt='article'></img>
        </header>
        <div className='article__text-content'>{ documentToReactComponents(JSON.parse(post.mainText.raw)) }</div>
        <div className='author__container'>
          <img className='author__img' src={ post.authorImage.file.url } alt={post.authorImage.title}></img>
          <h4 className='author__title'>{ post.authorImage.title }</h4>
        </div>
      </div>
    </Layout>
  );
};

export default PostTemplate;
