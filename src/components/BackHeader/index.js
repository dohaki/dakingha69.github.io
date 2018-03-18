import React from 'react'
import { navigateTo } from 'gatsby-link'
import ArrowLeft from 'react-icons/lib/ti/arrow-left'

const BackHeader = ({ direction, link, name, onPageLeave }) => (
  <div
    style={styles.container}
    onClick={() => navigateTo('/')}
  >
    <ArrowLeft
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
    fontSize: '50px'
  }
}

export default BackHeader
