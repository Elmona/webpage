import React from 'react'
import { graphql } from 'gatsby'
import RichText from './lib/RichtText'

const Page = props => {
  const richText = props.data?.contentfulWebpage?.body

  return <div>
    <h1>{props?.pageContext?.name + ' <<- This should be visually hidden'}</h1>
    {richText && <RichText content={richText} />}
  </div>
}

export default Page

export const pageQuery = graphql`
  query WebpageAndWebpage($slug: String!) {
    contentfulWebpage(slug: {eq: $slug}) {
      name
      headline
      slug
      body {
        raw
      }
    }
  }
`