import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'

import Layout from '../components/Layout'
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
      <Layout>
        <Transition in={this.state.in} timeout={100}>
          {state => (
            <div style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}>
              <BackHeader />
              <div style={styles.container}>
                <h1>Hello world!</h1>
                <div style={styles.textContainer}>
                  <p>
                    My name is Dong-Ha Kim and I am a
                    <p/>
                    <div>Fullstack Developer</div>
                    <div>Blockchain Enthusiast</div>
                    <div>M. Sc. Information Systems Management Student</div>
                  </p>
                  <p>I love writing applications - from prototypes to production ready.</p>
                  <p>I am also a BIG fan and believer of blockchain technology, especially Ethereum &hearts;</p>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </Layout>
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
  },
  textContainer: {
    
  }
}

export default AboutPage
