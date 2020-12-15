require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}
const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
    throw new Error(
        'Contentful spaceId and the access token need to be provided.'
    )
}

module.exports = {
    siteMetadata: {
        title: `Boiler Buissness Site`,
    },
    plugins: [
        {
            resolve: `gatsby-source-contentful`,
            options: contentfulConfig
        },
    ],
}