import React from 'react'
import * as css from './Logotype.css.js'
import { Link } from 'gatsby'

const Logo = ({ url }) => <Link to='/'>
  <picture>
    <source
      srcSet={`${url}?fm=webp&w=200&h=45`}
      media='(max-width: 500px)'
      width='200'
      height='45'
      css={css.image}
    />
    <source
      srcSet={`${url}?fm=webp&w=350&h=78`}
      width='350'
      header='78'
      css={css.image}
    />
    <img
      src={url}
      alt='logotype'
      css={css.image}
    />
  </picture>
</Link>

export default Logo