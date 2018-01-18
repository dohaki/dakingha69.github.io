import React from 'react'
import Link from 'gatsby-link'

const VerticalNav = (props) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100px'
    }}
  >
    <div>
      <Link to={props.link}>{props.name}</Link>
    </div>
  </div>
)

export default VerticalNav
