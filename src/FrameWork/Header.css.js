import { css } from '@emotion/react'

export const navigation = css`
  background-color: #4e9a6a;

  li {
    display: flex;
    justify-content: space-around;

    ul {
      display: flex;
      padding: 0rem 2rem 0rem;
      a {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        padding-left: 2rem;
        padding-right: 2rem;
        line-height: 4rem;
        text-decoration: none;
        font-size: 2.5rem;
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

export const image = css`
  margin-top: .5rem;
  margin-left: .5rem;
  margin-bottom: 1rem;
`