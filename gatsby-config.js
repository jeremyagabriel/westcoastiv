require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  );
}

module.exports = {
  siteMetadata: {
    title: `West Coast IV`,
    description: `San Diego’s leading replenishment provider in Cryotherapy, IV therapy, and Vitamin Injections.`,
    url: `https://westcoastiv.netlify.app`,
    image: `/images/westcoastiv_og_image.jpg`,
    author: `West Coast IV`,
    keywords: `Cryotherapy, Vitamin Injections, Hydration Therapy, San Diego, Muscle Recovery, Fitness`
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Roboto',
            weights: ['100', '300', '400', '500', '700', '900']
          },
          {
            family: 'Barlow Condensed',
            weights: ['100', '300', '400', '500', '600', '700', '900']
          },
        ],
        display: 'block',
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: spaceId,
        accessToken: accessToken,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Tungsten Narrow'],
          urls: ['/fonts/fonts.css'],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`
  ],
}
