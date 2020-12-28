import React from 'react'
import { graphql } from 'gatsby'
import RichText from './lib/RichtText'
import { wrapper } from './FrameWork/GlobalStyles'
import * as css from './index.css'

const Page = props => {
  const richText = props.data?.contentfulWebpage?.body

  return <div css={[wrapper, css.shadow]}>
    <div css={css.innerWrapper}>
      <h1 css={css.hiddenH1}>{props?.pageContext?.name}</h1>
      {richText && <RichText content={richText} />}
    </div>
  </div>
}

export default Page

export const pageQuery = graphql`
  query Webpage($slug: String!) {
    contentfulWebpage(slug: {eq: $slug}) {
      headline
      slug
      body {
        raw
        __typename
        references {
          ... on ContentfulPerson {
            __typename
            contentful_id
            name
            picture {
              description
              file {
                url
              }
            }
            text {
              text
            }
            quote
          }
          ... on ContentfulCallToActions {
            __typename
            contentful_id
            image {
              alt
              url {
                file {
                  url
                }
              }
            }
            title
            list {
              title
              url
              description {
                id
                description
              }
            }
          }
        }
      }
    }
  }

`