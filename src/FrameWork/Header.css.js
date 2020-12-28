import { css } from '@emotion/react'

export const navigation = css`
  background-color: #4e9a6a;

  ul {
    display: flex;
    justify-content: space-around;

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

export const sublist = css`
  display: none !important;
`

export const image = css`
  margin-top: .5rem;
  margin-left: .5rem;
  margin-bottom: 1rem;
`