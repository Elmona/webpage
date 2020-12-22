
import React from 'react'
import { css } from '@emotion/react'

export const heading = css`
  align-self: center;
`

export const largeImage = css`
  position: relative;
  top: -2rem;
  left: 50%;
  transform: translateX(-50%);
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
  background-image:url(${url}?w=800);
  height: 30rem;

`