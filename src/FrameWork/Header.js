import React from 'react'
import { Link } from 'gatsby'
import * as css from './Header.css'
import { expandWidth, wrapper } from './GlobalStyles'

const Header = ({ props }) => {
  const url = props.pageContext?.layout?.logotype.file?.url

  return <header css={wrapper}>
    <Link to='/'>
      <picture>
        <source
          srcSet={`${url}?fm=webp&w=200`}
          media='(max-width: 500px)'
          width='200'
          height='45'
          css={css.image}
        />
        <source
          srcSet={`${url}?fm=webp`}
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
    <nav css={[css.navigation, expandWidth]}>
      <li>
        <ul>
          <Link to='/'
            activeClassName='active'
          >Start</Link>
        </ul>
        <ul><Link to='/emma'>Emma</Link></ul>
        <ul><Link to='/about'>About</Link></ul>
        <ul><Link to='/test'>Test</Link></ul>
      </li>
    </nav>
  </header>
}

export default Header