import React from 'react'
import { Link } from 'gatsby'
import * as css from './Header.css'
import { makeTree } from '../helpers/MakeTree'

const Navigation = ({ pages, setMenuOpen }) => {
  const tree = makeTree(pages).sort((a, b) => b.order - a.order)
  return tree.map(page => <MenuItem page={page} key={page.slug} setMenuOpen={setMenuOpen} />)
}

const MenuItem = ({ page, setMenuOpen }) => {
  const thereIsChildren = page.children.length > 0
  return <li
    key={page.slug}
    css={thereIsChildren ? css.sublist : null}
  >
    <Link
      activeClassName='active'
      to={page.slug === '/index' ? '/' : page.slug}
      onClick={() => setMenuOpen(false)}
    >
      {page.headline}
    </Link>
    {thereIsChildren && <SubMenu
      children={page.children}
      setMenuOpen={setMenuOpen}
    />}
  </li>
}

const SubMenu = ({ children, setMenuOpen }) => <ul>
  {children.map(subpage => <li key={subpage.slug}>
    <Link
      to={subpage.slug}
      activeClassName='active'
      onClick={() => setMenuOpen(false)}
    >{subpage.headline}</Link>
  </li>)}
</ul>

export default Navigation