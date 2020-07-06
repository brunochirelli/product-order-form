module.exports = {
  pathPrefix: '/product-order-form',
  siteMetadata: {
    title: `Product Order Form`,
    description: `A simple product validation with Formik hosted in Netlify with Netlify Forms`,
    author: `Bruno Chirelli`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-theme-material-ui`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    // `gatsby-plugin-offline`,
  ],
};
