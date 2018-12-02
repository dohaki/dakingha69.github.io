import React from 'react'
import { navigate } from 'gatsby-link'

const HorizontalNav = ({ direction, link, name, onPageLeave }) => (
  <div
    style={styles.container}
    onClick={() => {
      onPageLeave(name)
      setTimeout(() => {
        navigate(link)
      }, 1000)
    }}
  >
    <div
      className="rotated-link"
      style={{
        transform: (direction === 'left')
          ? 'rotate(90deg)'
          : 'rotate(270deg)'
      }}
    >
      <p className='link'>{name}</p>
    </div>
  </div>
);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100px'
  }
}

export default HorizontalNav
