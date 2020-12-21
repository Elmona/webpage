import React from 'react'
import { graphql } from 'gatsby'
import RichText from './lib/RichtText'
import { css } from '@emotion/react'
import { wrapper } from './FrameWork/GlobalStyles'

const Page = props => {
  const richText = props.data?.contentfulWebpage?.body

  return <div css={wrapper}>
    <h1 css={css`display: none;`}>{props?.pageContext?.name}</h1>
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