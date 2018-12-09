import React, { Component } from 'react';
import { Box, Heading } from 'grommet';
import Transition from 'react-transition-group/Transition';
import Typist from 'react-typist';

import Layout from '../components/Layout';
import HorizontalNav from '../components/HorizontalNav';
import VerticalNav from '../components/VerticalNav';

class IndexPage extends Component {
  state = {
    inTransition: false,
    nextPageName: 'home',
    subTitles: [
      'M. Sc. Student TU Berlin.',
      'Blockchain Enthusiast.',
      'Fullstack Developer.',
    ]
  };

  handlePageLeave = (name) => {
    this.setState({
      inTransition: true,
      nextPageName: name.toLowerCase()
    });
  };

  render() {
    return (
      <Layout>
        <Transition
          in={this.state.inTransition}
          timeout={500}
        >
          {state => (
            <div style={{
              ...defaultStyle,
              ...transitionStyles[this.state.nextPageName][state]
            }}>
              <VerticalNav
                link='/about'
                name='ABOUT'
                onPageLeave={this.handlePageLeave}
              />
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}
              >
                <HorizontalNav
                  direction='left'
                  link='/contact'
                  name='CONTACT'
                  onPageLeave={this.handlePageLeave}
                />
                <Box width="250px">
                  <Heading>DH.Kim</Heading>
                  <Typist
                    cursor={{ show: false }}
                    avgTypingDelay={100}
                  >
                    .
                    {this.state.subTitles.map(subTitle => (
                      <div key={subTitle}>
                        <span>{subTitle}</span>
                        <Typist.Backspace count={subTitle.length} delay={2000} />
                      </div>
                    ))}
                  </Typist>
                </Box>
                <HorizontalNav
                  direction='right'
                  link='/projects'
                  name='PROJECTS'
                  onPageLeave={this.handlePageLeave}
                />
              </Box>
              <VerticalNav
                link='/blog'
                name='BLOG'
                onPageLeave={this.handlePageLeave}
              />
            </div>
          )}
        </Transition>
      </Layout>
    );
  }
}

const defaultStyle = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  textAlign: 'center',
  transition: 'margin-right 1s ease-in-out, margin-left 1s ease-in-out, margin-top 1s ease-in-out, opacity 500ms'
};

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
  contact: {
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
  blog: {
    entering: {
      marginTop: '-500px',
      opacity: 1
    },
    entered: {
      marginTop: '-500px',
      opacity: 0
    }
  }
};

export default IndexPage;
