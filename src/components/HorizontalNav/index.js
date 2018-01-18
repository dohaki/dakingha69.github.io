import React from 'react'
import Link from 'gatsby-link'

const HorizontalNav = (props) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100px'
    }}
  >
    <div
      style={{
        transform: (props.direction === 'left')
          ? 'rotate(90deg)'
          : 'rotate(270deg)'
      }}
    >
      <Link to={props.link}>{props.name}</Link>
    </div>
  </div>
)

export default HorizontalNav
