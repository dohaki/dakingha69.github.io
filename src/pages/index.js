import React, { Component } from 'react';
import { Box } from 'grommet';
import Transition from 'react-transition-group/Transition';

import Layout from '../components/Layout';
import HorizontalNav from '../components/HorizontalNav';
import VerticalNav from '../components/VerticalNav';
import HomeContentBox from '../components/HomeContentBox';

class IndexPage extends Component {
  state = {
    inTransition: false,
    nextPageName: 'home',
    subTitles: [
      'Dong-Ha Kim.',
      'Web3 Developer.',
      'Blockchain Enthusiast.',
      'M. Sc. Student TU Berlin.',
    ],
  };

  handlePageLeave = name => {
    this.setState({
      inTransition: true,
      nextPageName: name.toLowerCase(),
    });
  };

  render() {
    return (
      <Layout title={'Welcome ♥'}>
        <Transition in={this.state.inTransition} timeout={500}>
          {state => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[this.state.nextPageName][state],
              }}
            >
              <VerticalNav
                link="/about"
                name="ABOUT"
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
                  direction="left"
                  link="/contact"
                  name="CONTACT"
                  onPageLeave={this.handlePageLeave}
                />
                <HomeContentBox subTitles={this.state.subTitles} />
                <HorizontalNav
                  direction="right"
                  link="/projects"
                  name="PROJECTS"
                  onPageLeave={this.handlePageLeave}
                />
              </Box>
              <VerticalNav
                link="/blog"
                name="BLOG"
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
  transition:
    'margin-right 1s ease-in-out, margin-left 1s ease-in-out, margin-top 1s ease-in-out, opacity 500ms',
};

const transitionStyles = {
  about: {
    entering: {
      marginTop: '500px',
      opacity: 1,
    },
    entered: {
      marginTop: '500px',
      opacity: 0,
    },
  },
  contact: {
    entering: {
      marginLeft: '500px',
      marginRight: '-500px',
      opacity: 1,
    },
    entered: {
      marginLeft: '500px',
      marginRight: '-500px',
      opacity: 0,
    },
  },
  home: {
    entering: {
      marginTop: '500px',
      opacity: 1,
    },
    entered: {
      marginTop: '500px',
      opacity: 0,
    },
  },
  projects: {
    entering: {
      marginLeft: '-500px',
      marginRight: '500px',
      opacity: 1,
    },
    entered: {
      marginLeft: '-500px',
      marginRight: '500px',
      opacity: 0,
    },
  },
  blog: {
    entering: {
      marginTop: '-500px',
      opacity: 1,
    },
    entered: {
      marginTop: '-500px',
      opacity: 0,
    },
  },
};

export default IndexPage;
