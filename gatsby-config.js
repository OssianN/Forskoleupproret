/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms-paths`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `9mjt2hlgn5mu`,
        accessToken: `Zvdhab8bXRNUswGt5TbVOG8waPpc_W4F835zECYUf9k`,
      },
    },
  ],
}
