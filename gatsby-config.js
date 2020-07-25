require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Edgar Barrantes`,
    siteTitleAlt: `Edgar Barrantes - Ideas and projects`,
    siteHeadline: `Blog and portfolio`,
    siteUrl: `https://edgarbarrrantes.com`,
    siteDescription: `Edgar Barrantes is a web developer, joke writer and content creator, he's in the search of a symbiotic relationship with the ideas that inhabit him, this is a garden for them to grow outside of his head`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@edgarbarrantes`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-embedder`,
            options: {
              customTransformers: [
                // Your custom transformers
              ],
              services: {
                // The service-specific options by the name of the service
              },
            },
          },
          // Other plugins here...
          `gatsby-plugin-twitter`,
        ],
      },
    },
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/edgar-barrantes/`,
          },
          {
            name: `Twitter`,
            url: `https://twitter.com/edgarbarrantes`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/edgarbbrais`,
          },
        ],
        mdx: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Edgar Barrantes - Ideas and projects`,
        short_name: `Edgar's Stuff`,
        description: `In the search of a symbiotic relationship with the ideas that inhabit him, this is a garden for them to grow outside of his head`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
