import React, { useEffect, useState } from 'react'
import * as css from './Header.css'
import { expandWidth, minWidth, wrapper } from './GlobalStyles'
import Burger from '../Icons/Burger'
import Logo from './Logotype'
import Navigation from './Navigation'

const Header = ({ props }) => {
  const url = props.pageContext?.layout?.logotype?.file?.url
  const pages = props?.pageContext?.navigation

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    window.matchMedia(`(min-width: ${minWidth})`).addEventListener('change', e => {
      if (e.matches) {
        setMenuOpen(false)
      }
    })
  }, [])

  return <header css={wrapper}>
    <Logo url={url} />
    <nav css={[css.navigation, menuOpen ? css.menuOpen : null, expandWidth]}>
      <Burger
        role='img'
        onClick={() => setMenuOpen(!menuOpen)}
        title='Burger menu'
        style={css.burger}
      />
      <ul>
        <Navigation
          pages={pages}
          setMenuOpen={setMenuOpen}
        />
      </ul>
    </nav>
  </header>
}

export default Header