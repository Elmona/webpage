import { css } from '@emotion/react'
import { medium } from '../FrameWork/GlobalStyles'

export const navigation = css`
  background-color: #4e9a6a;
  display: flex;
  justify-content: flex-end;

  svg {
    padding-right: 1rem;
    fill: #fff;
  }

  ${medium} {
    svg {
      display: none;
      width: 0px;
      height: 0px;
    }
  }

  ul {
    display: none;
    justify-content: flex-end;

    ${medium} {
      display: flex;
      justify-content: space-around;
      width: 100%;
    }

    li {
      display: flex;
      padding: 0rem 2rem 0rem;
      a {
        padding-top: 1rem;
        padding-bottom: 1rem;
        padding-left: 2rem;
        padding-right: 2rem;
        line-height: 4rem;
        text-decoration: none;
        font-size: 2rem;
        color: white;
      }
      a:hover {
        text-decoration: underline;
      }
    }

    .active {
      background-color: #155e2d;
    }
  }
`

export const menuOpen = css`
  display: flex;
  flex-direction: column;

  svg {
    align-self: flex-end;
  }

  ul {
    display: flex;
    flex-direction: column;
    
    li {
      display: flex;
      flex-direction: column;
      ul {
        display: flex;
        flex-direction: column;
      }
    }
  }
`

export const burger = css`
  padding: 1rem 0rem 1rem 2rem;
`

export const sublist = css`
  ${medium} {
    display: none !important;
  }
`
