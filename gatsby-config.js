/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sass",
    "gatsby-plugin-netlify"
    // {
    //   resolve: 'gatsby-plugin-sass',
    //   options: {
    //     data: `@import "${__dirname}/src/scss/style";`,
    //   }
    // },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "UA-74131346-14",
    //     anonymize: true,
    //   }
    // }
  ],
};
