'use strict'

require('dotenv').config()
const contentful = require('contentful-management')

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  managementToken: process.env.CONTENTFUL_CONTENT_MANAGEMENT_TOKEN
}


const client = contentful.createClient({
  accessToken: contentfulConfig.managementToken
})

client.getSpace('pa9mxjk041lq').then(space => {
  console.log(space)
})
