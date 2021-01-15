require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `C&C Multiservicios CR`,
    description: `Somos una empresa dedicada al transporte y distribución de mercancías tipo currier contamos con más de 10 Años en el mercado ofreciendo soluciones reales a sus problemas de logística.`,
    author: `@mikessc`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.GATSBY_API_URL || 'http://localhost:1337',
        queryLimit: 100000
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `C&C Multiservicios`,
        short_name: `C&C App`,
        description: `App de tracking de paquetes`,
        lang: `es`,
        display: `standalone`,
        icon: `./src/images/logo.png`,
        start_url: `/app`
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/app/*`, `/login`, `/app/dashboard`, `/app`, `/index`]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true
        }
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-scroll-reveal`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
