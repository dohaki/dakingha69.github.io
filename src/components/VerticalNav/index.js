import React from 'react'
import { navigateTo } from 'gatsby-link'

const VerticalNav = ({ link, name, onPageLeave }) => (
  <div
    style={styles.container}
    onClick={() => {
      onPageLeave(name)
      setTimeout(() => {
        navigateTo(link)
      }, 1000)
    }}
  >
    <p className='link'>{name}</p>
  </div>
)

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100px'
  },
  name: {
    
  }
}

export default VerticalNav
