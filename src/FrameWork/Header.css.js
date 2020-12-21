import { css } from '@emotion/react'

export const navigation = css`
  background-color: #4e9a6a;

  li {
    display: flex;
    justify-content: space-around;

    ul {
      display: flex;
      padding: 1rem 2rem 1rem;
      a {
        text-decoration: none;
        font-size: 2rem;
        color: white;
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