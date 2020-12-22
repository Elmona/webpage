import React from 'react'
import { css } from '@emotion/react'
import GlobalStyles from './GlobalStyles'
import Header from './Header'
import Footer from './Footer'

export const Layout = props => <>
  <GlobalStyles />
  <Header props={props} />
  {props.children}
  <Footer props={props} />
</>