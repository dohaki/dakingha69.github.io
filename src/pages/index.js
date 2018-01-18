import React from 'react'
import Link from 'gatsby-link'

import HorizontalNav from '../components/HorizontalNav'
import VerticalNav from '../components/VerticalNav'

const IndexPage = () => (
  <div
    style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      textAlign: 'center'
    }}
  >
    <VerticalNav
      link='/page-2/'
      name='ABOUT'
    />
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <HorizontalNav
        direction='left'
        link='/page-2/'
        name='CV'
      />
      <div>
        <h1>DH.Kim</h1>
      </div>
      <HorizontalNav
        direction='right'
        link='/page-2/'
        name='PROJECTS'
      />
    </div>
    <VerticalNav
      link='/page-2/'
      name='CONTACT'
    />
  </div>
)

export default IndexPage
