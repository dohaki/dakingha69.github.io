import React, { Component } from 'react'
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
                <p>My name is Dong-Ha Kim and I am a Fullstack Developer, Blockchain Enthusiast and M. Sc. Student.</p>
                <iframe src="https://giphy.com/embed/MGdfeiKtEiEPS" width="480" height="330" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                <p>I love writing applications - from prototypes to production ready.</p>
                <iframe src="https://giphy.com/embed/l1J9BjdexFdonLU5O" width="480" height="264" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                <p>I am also a BIG fan and believer of blockchain technology, especially Ethereum &hearts;</p>
                <iframe src="https://giphy.com/embed/IPbS5R4fSUl5S" width="480" height="266" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                <p>Besides working at a blockchain company to drive mainstream adoption of the technology further, I am also doing my Master of Science in Information Systems Management at the Technical University of Berlin.</p>
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
