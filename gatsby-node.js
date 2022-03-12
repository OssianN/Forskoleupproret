exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("Error loading Contentful", JSON.stringify(result.errors))
  };

  const blogPost = result.data.allContentfulBlogPost.edges;

  blogPost.forEach(post => {
    if (post.node.slug.includes('dummy9211')) {
      //ignores dummy data
      return
    }

    actions.createPage({
      path: `/${post.node.slug}`,
      component: require.resolve("./src/templates/post-template.js"),
      context: {
        slug: post.node.slug,
      },
    })
  })
}