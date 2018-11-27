import React from 'react'
import Helmet from 'react-helmet'

import './index.css'

const Layout = ({ children }) => (
  <div
    style={{
      height: '100%'
    }}
  >
    <Helmet
      title="DH.Kim"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div
      style={{
        height: '100%'
      }}
    >
      {children}
    </div>
  </div>
)

export default Layout
