import React, { Component } from 'react'
import Link from 'gatsby-link'
import Transition from 'react-transition-group/Transition'

import HorizontalNav from '../components/HorizontalNav'
import VerticalNav from '../components/VerticalNav'

class IndexPage extends Component {
  state = {
    inTransition: false,
    nextPageName: 'home'
  }

  handlePageLeave(name) {
    this.setState({
      inTransition: true,
      nextPageName: name.toLowerCase()
    })
  }

  render() {
    const { inTransition, nextPageName } = this.state

    return (
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
