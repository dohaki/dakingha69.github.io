import React, { Component } from 'react'
import Link from 'gatsby-link'
import Transition from 'react-transition-group/Transition'

import Layout from '../components/Layout'

class AboutPage extends Component {
  state = {
    in: false
  }

  componentDidMount() {
    this.setState({ in: true })
  }

  render() {
    return (
      <Layout>
        <Transition in={this.state.in} timeout={100}>
          {state => (
            <div style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}>
              <h1>ABOUT</h1>
              <p>Welcome to page 2</p>
              <Link to="/">Go back to the homepage</Link>
            </div>
          )}
        </Transition>
      </Layout>
    )
  }
}

const defaultStyle = {
  transition: `opacity 500ms`,
  opacity: 0,
  padding: 20,
  display: 'inline-block',
  backgroundColor: '#8787d8'
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: {},
  exited: {}
}

export default AboutPage
