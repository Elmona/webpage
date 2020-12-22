import React from 'react'
import { Global, css } from '@emotion/react'
import { Helmet } from 'react-helmet'

const medium = `@media (min-width: 768px)`
const contentWidth = '100rem'

export const wrapper = css`
  padding: 0rem;

  ${medium} {
    max-width: ${contentWidth};
    margin: 0 auto;
  }
`

export const maxTextWidth = css`
  max-width: 80rem;
  margin-left: 1rem;
`

export const expandWidth = css`
  margin-left: -50vw;
  margin-right: -50vw;
  padding-left: +50vw;
  padding-right: +50vw;
`

const headings = css`
  h1 {
    font-size: 3rem;
    line-height: 2.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 5rem;
    line-height: 3rem;
    margin-top: 2rem;
  }

  h3 {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  p {
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    font-size: 2rem;
    line-height: 3rem;
  }
  
  a {
    font-size: 2rem;
    line-height: 3rem;
  }

  a:focus{
    box-shadow: 0 0 0 4px blue;
  }
`

const resetStyles = css`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 65%;
    font-family: 'Roboto', sans-serif;
    vertical-align: baseline;
  }
`

const FontLoader = () => <Helmet>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
</Helmet>

const GlobalStyles = () => <><Global
  styles={[resetStyles, headings]}
/><FontLoader /></>

export default GlobalStyles