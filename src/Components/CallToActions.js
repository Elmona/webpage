import React from 'react'
import * as css from './CallToActions.css'
import { Link } from 'gatsby'

const CallToActions = ({ fields }) => {
  const imageurl = fields?.image?.url?.file?.url
  const items = fields?.list
  console.log(items)

  return <div css={css.cover(imageurl)}>
    {items.map(item =>
      <Link to={item.url} css={css.box}>
        <h3 css={css.heading}>{item.title}</h3>
        <p>{item.description.description}</p>
      </Link>
    )}
  </div>
}
export default CallToActions