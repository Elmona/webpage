import React from 'react'
import * as css from './Footer.css.js'
import { wrapper, expandWidth } from './GlobalStyles'

const Footer = props => <footer css={[css.wrapper, wrapper, expandWidth]}>
  <div>
    <p>Footer</p>
    <p>Footer</p>
    <p>Footer</p>
    <p>Footer</p>
  </div>
</footer>

export default Footer