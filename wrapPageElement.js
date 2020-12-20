import React from 'react'
import { Layout } from './src/FrameWork/Layout'

const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

export default wrapPageElement