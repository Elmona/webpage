import React from 'react'
import { Link } from 'gatsby'
import * as css from './Header.css'

const Header = ({ props }) => {
  console.log(props)

  return <header>
    <Link to='/'>
      <img
        css={css.image}
        src={props.pageContext.layout.logotype.file.url}
        alt='logotype'
      />
    </Link>
    <nav css={css.navigation}>
      <li>
        <ul>
          <Link to='/'
            activeClassName='active'
          >Hem</Link>
        </ul>
        <ul><Link to='/emma'>Emma</Link></ul>
        <ul><Link to='/about'>About</Link></ul>
        <ul><Link to='/test'>Test</Link></ul>
      </li>
    </nav>
  </header>
}

export default Header