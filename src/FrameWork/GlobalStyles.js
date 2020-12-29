import React from 'react'
import { Global, css } from '@emotion/react'
import { Helmet } from 'react-helmet'

export const contentWidth = '100rem'
export const minWidth = '768px'

export const medium = `@media (min-width: ${minWidth})`

export const wrapper = css`
  padding: 0rem;

  ${medium} {
    max-width: ${contentWidth};
    margin: 0 auto;
  }
`

export const maxTextWidth = css`
  max-width: 80rem;
  margin-left: 1.6rem;
  margin-right: 1.6rem;
`

export const expandWidth = css`
  margin-left: -50vw;
  margin-right: -50vw;
  padding-left: +50vw;
  padding-right: +50vw;
`

const headings = css`
  h1, h2 {
    margin-bottom: 1.6rem;
  }

  h3, h4, h5, h6 {
    margin-bottom: .8rem;
  }

  h2, h3 {
    margin-top: 3.2rem;
  }

  h1 {
    font-size: 2.8rem;
    line-height: 3.2rem;

    ${medium} {
      font-size: 4.8rem;
      line-height: 5.6rem;
    }
  }

  h2 {
    font-size: 2.4rem;
    line-height: 3.2rem;

    ${medium} {
      font-size: 3.4rem;
      line-height: 4.8rem;
    }
  }

  h3 {
    font-size: 2rem;
    line-height: 3.2rem;

    ${medium} {
      font-size: 2.8rem;
    }
  }
  
  h4 {
    font-size: 1.8rem;
    line-height: 3.2rem;
    ${medium} {
      font-size: 2.4rem;
    }
  }

  p {
    margin-bottom: 1.8rem;
    font-size: 1.8rem;
    line-height: 3.2rem;
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
    font-family: 'Open Sans', sans-serif;
    vertical-align: baseline;
  }
`

const FontLoader = () => <Helmet>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&display=swap" rel="stylesheet" />
</Helmet>

const GlobalStyles = () => <><Global
  styles={[resetStyles, headings]}
/><FontLoader /></>

export default GlobalStyles