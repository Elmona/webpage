import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import * as css from './Header.css'
import { expandWidth, minWidth, wrapper } from './GlobalStyles'
import { makeTree } from '../helpers/MakeTree'
import Burger from '../Icons/Burger'
import Logo from './Logotype'

const Header = ({ props }) => {
  const url = props.pageContext?.layout?.logotype?.file?.url
  const pages = props?.pageContext?.navigation
  const tree = makeTree(pages).sort((a, b) => b.order - a.order)

  const [menuOpen, setMenuOpen] = useState(true)

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
      />
      <ul>
        {tree.map(page => <li key={page.slug}>
          <Link
            activeClassName='active'
            to={page.slug === '/index' ? '/' : page.slug}>
            {page.headline}</Link>
          {page.children.length > 0 &&
            <ul css={css.sublist}>
              {page.children.map(subpage => <li key={subpage.slug}>
                <Link to={subpage.slug} activeClassName='active'>{subpage.headline}</Link>
              </li>)}
            </ul>}
        </li>
        )}
      </ul>
    </nav>
  </header>
}

export default Header