import { css } from '@emotion/react'
import { medium } from '../FrameWork/GlobalStyles'

export const heading = css`
  align-self: center;
`

export const box = css`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 2rem;
  padding: 2rem;
  background-color: #4e9a6a;
  border-radius: .5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: white;
  text-decoration: none;
`

export const cover = url => css`
  display: flex;
  justify-content: space-around;
  position: relative;
  background-size: cover;
  top: -2rem;
  background-image: none;
  flex-direction: column;
  ${medium} {
    height: 30rem;
    background-image:url(${url}?fm=webp&w=800);
    flex-direction: row;
  }
`