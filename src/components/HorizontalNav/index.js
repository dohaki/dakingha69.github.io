import React from 'react'
import { navigateTo } from 'gatsby-link'

const HorizontalNav = ({ direction, link, name, onPageLeave }) => (
  <div
    style={styles.container}
    onClick={() => {
      onPageLeave(name)
      setTimeout(() => {
        navigateTo(link)
      }, 1000)
    }}
  >
    <div
    style={{
      transform: (direction === 'left')
        ? 'rotate(90deg)'
        : 'rotate(270deg)'
    }}
    >
      <p>{name}</p>
    </div>
  </div>
)

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100px'
  }
}

export default HorizontalNav
