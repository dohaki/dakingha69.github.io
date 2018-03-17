import React from 'react'
import Link from 'gatsby-link'
import Transition from 'react-transition-group/Transition'

const SecondPage = () => (
  <Transition in={true} timeout={500}>
    {state => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    )}
  </Transition>
)

const defaultStyle = {
  transition: `opacity 2s ease-in-out`,
  opacity: 0,
  padding: 20,
  display: 'inline-block',
  backgroundColor: '#8787d8'
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

export default SecondPage
