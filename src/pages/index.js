import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'

import Layout from '../components/Layout'
import HorizontalNav from '../components/HorizontalNav'
import VerticalNav from '../components/VerticalNav'

class IndexPage extends Component {
  state = {
    inTransition: false,
    nextPageName: 'home',
    subTitles: [
      'Fullstack Developer.',
      'Blockchain Enthusiast.',
      'Master Student TU Berlin.'
    ],
    subTitle: '',
    titleIndex: 0,
    charIndex: 0,
    isDeleting: false
  }

  componentDidMount() {
    this.typeWriter()
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  handlePageLeave(name) {
    this.setState({
      inTransition: true,
      nextPageName: name.toLowerCase()
    })
  }

  typeWriter() {
    let {
      charIndex,
      titleIndex,
      subTitles,
      subTitle,
      isDeleting,
    } = this.state
    let timeout = 100
    if (charIndex < 0) {
      isDeleting = false
      subTitle = ''
      charIndex = 0
      titleIndex = (titleIndex + 1) % subTitles.length
    } else if (charIndex < subTitles[titleIndex].length) {
      if (!isDeleting) {
        subTitle += subTitles[titleIndex].charAt(charIndex)
        charIndex++
      } else {
        subTitle = subTitles[titleIndex].slice(0, subTitle.length - 1)
        charIndex--
      }
    } else {
      isDeleting = true
      charIndex--
      timeout = 1000
    }
    this.setState({
      subTitle,
      charIndex,
      titleIndex,
      isDeleting
    })
    this.timeout = setTimeout(() => this.typeWriter(), timeout)
  }

  render() {
    const { inTransition, nextPageName } = this.state

    return (
      <Layout>
        <Transition in={inTransition} timeout={500}>
          {state => (
            <div style={{
              ...defaultStyle,
              ...transitionStyles[nextPageName][state]
            }}
            >
              <VerticalNav
                link='/about/'
                name='ABOUT'
                onPageLeave={this.handlePageLeave.bind(this)}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <HorizontalNav
                  direction='left'
                  link='/cv/'
                  name='CV'
                  onPageLeave={this.handlePageLeave.bind(this)}
                />
                <div>
                  <h1>DH.Kim</h1>
                  <p>
                    {this.state.subTitle}
                    <span className='blinking-cursor'>|</span>
                  </p>
                </div>
                <HorizontalNav
                  direction='right'
                  link='/projects/'
                  name='PROJECTS'
                  onPageLeave={this.handlePageLeave.bind(this)}
                />
              </div>
              <VerticalNav
                link='/contact/'
                name='CONTACT'
                onPageLeave={this.handlePageLeave.bind(this)}
              />
            </div>
          )}
        </Transition>
      </Layout>
    )
  }
}

const defaultStyle = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  textAlign: 'center',
  transition: 'margin-right 1s ease-in-out, margin-left 1s ease-in-out, margin-top 1s ease-in-out, opacity 500ms'
}

const transitionStyles = {
  about: {
    entering: {
      marginTop: '500px',
      opacity: 1
    },
    entered: {
      marginTop: '500px',
      opacity: 0
    }
  },
  cv: {
    entering: {
      marginLeft: '500px',
      marginRight: '-500px',
      opacity: 1
    },
    entered: {
      marginLeft: '500px',
      marginRight: '-500px',
      opacity: 0
    }
  },
  home: {
    entering: {
      marginTop: '500px',
      opacity: 1
    },
    entered: {
      marginTop: '500px',
      opacity: 0
    }
  },
  projects: {
    entering: {
      marginLeft: '-500px',
      marginRight: '500px',
      opacity: 1
    },
    entered: {
      marginLeft: '-500px',
      marginRight: '500px',            
      opacity: 0
    }
  },
  contact: {
    entering: {
      marginTop: '-500px',
      opacity: 1
    },
    entered: {
      marginTop: '-500px',
      opacity: 0
    }
  }
}

export default IndexPage
