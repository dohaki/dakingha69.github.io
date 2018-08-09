import React, { Component } from 'react'
import Link from 'gatsby-link'
import Transition from 'react-transition-group/Transition'

import BackHeader from '../components/BackHeader'

class AboutPage extends Component {
  state = {
    in: false
  }

  componentDidMount() {
    this.setState({ in: true })
  }

  render() {
    return (
      <Transition in={this.state.in} timeout={100}>
        {state => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            <BackHeader />
            <div style={styles.container}>
              <h1>Hello world!</h1>
              <div class="textContainer">
                <p>My name is Dong-Ha Kim and I am a Fullstack Developer, Blockchain Enthusiast and M.Sc. Student at the Technical University Berlin.</p>
              </div>
            </div>
          </div>
        )}
      </Transition>
    )
  }
}

const defaultStyle = {
  transition: `opacity 500ms`,
  opacity: 0
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 }
}

const styles = {
  container: {
    textAlign: 'center'
  }
}

export default AboutPage
