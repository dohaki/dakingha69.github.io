import React from 'react'
import { navigateTo } from 'gatsby-link'
import { TiArrowLeft } from 'react-icons/ti'

const BackHeader = ({ direction, link, name, onPageLeave }) => (
  <div
    style={styles.container}
    onClick={() => navigateTo('/')}
  >
    <TiArrowLeft
      className='pointer'
      style={styles.arrow}
    />
  </div>
)

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: '10px'
  },
  arrow: {
    fontSize: '40px'
  }
}

export default BackHeader
