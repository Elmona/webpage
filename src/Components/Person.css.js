
import { css } from '@emotion/react'
// import { medium } from '../FrameWork/GlobalStyles'

export const wrapper = css`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  div {
    display: flex;
    flex-direction: row;
    .text {
      display: flex;
      flex-direction:column;
      padding-left: 1rem;
    }
  }
`

export const quote = css`
  margin-top: 1rem;
  border-left: 4px solid #115e2d;
  padding-left: 1rem;
  font-style: italic;
`