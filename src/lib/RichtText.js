import React from 'react'
import { css } from '@emotion/react'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { maxTextWidth } from '../FrameWork/GlobalStyles'

import CallToActions from '../Components/CallToActions'
import Person from '../Components/Person'

const Bold = ({ children }) => <p css={css`font-weight: 700;`}>{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p css={maxTextWidth}>{children}</p>,
    [BLOCKS.HEADING_1]: (node, children) => <h1 css={maxTextWidth}>{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2 css={maxTextWidth}>{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3 css={maxTextWidth}>{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4 css={maxTextWidth}>{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5 css={maxTextWidth}>{children}</h5>,
    [BLOCKS.EMBEDDED_ENTRY]: node => {
      const fields = node.data.target
      switch (node.data?.target?.__typename) {
        case 'ContentfulPerson':
          return <Person person={fields} />
        case 'ContentfulCallToActions':
          return <CallToActions fields={fields} />
        default:
          return <p>Not implemented</p>
      }
    },
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      )
    },
  },
}

export default ({ content }) => renderRichText(content, options)