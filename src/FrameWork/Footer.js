import React from 'react'
import * as css from './Footer.css.js'
import { wrapper, expandWidth } from './GlobalStyles'

const Footer = props => <div css={[css.wrapper, wrapper, expandWidth]}>
  <p>Footer</p>
</div>

export default Footer