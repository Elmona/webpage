import React from 'react'
import GlobalStyles from './GlobalStyles'
import Header from './Header'
import Footer from './Footer'

export const Layout = props => <div>
  <GlobalStyles />
  <Header props={props} />
  {props.children}
  <Footer props={props} />
</div>