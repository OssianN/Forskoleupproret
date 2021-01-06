exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("Error loading posts", JSON.stringify(result.errors))
  };
  
  const posts = result.data.allContentfulBlogPost.edges;

  posts.forEach(post => {
    actions.createPage({
      path: `/${post.node.slug}`,
      component: require.resolve("./src/templates/post-template.js"),
      context: {
        slug: post.node.slug,
      },
    })
  })
}