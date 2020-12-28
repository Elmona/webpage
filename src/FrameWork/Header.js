import React from 'react'
import { Link } from 'gatsby'
import * as css from './Header.css'
import { expandWidth, wrapper } from './GlobalStyles'
import { makeTree } from '../helpers/MakeTree'

const Logo = ({ url }) => <Link to='/'>
  <picture>
    <source
      srcSet={`${url}?fm=webp&w=200`}
      media='(max-width: 500px)'
      width='200'
      height='45'
      css={css.image}
    />
    <source
      srcSet={`${url}?fm=webp&w=350&h=78`}
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

const Header = ({ props }) => {
  const url = props.pageContext?.layout?.logotype?.file?.url
  const pages = props?.pageContext?.navigation
  const tree = makeTree(pages).sort((a, b) => b.order - a.order)

  return <header css={wrapper}>
    <Logo url={url} />
    <nav css={[css.navigation, expandWidth]}>
      <ul>
        {tree.map(page => <li key={page.slug}>
          <Link
            activeClassName='active'
            to={page.slug === '/index' ? '/' : page.slug}>
            {page.headline}</Link>
          {page.children.length > 0 &&
            <ul css={css.sublist}>
              {page.children.map(subpage => <li><Link to={subpage.slug}>{subpage.headline}</Link></li>)}
            </ul>}
        </li>
        )}
      </ul>
    </nav>
  </header>
}

export default Header