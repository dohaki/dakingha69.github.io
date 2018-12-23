import React, { Component } from 'react';
import { Box, Image, Text, Heading } from 'grommet';

import OverlayLinkBox from './OverlayLinkBox';

class ProjectCard extends Component {
  state = {
    showOverlay: false
  }

  handleEvent = ({ type }) => {
    switch (type) {
      case 'mouseenter':
        return this.setState({ showOverlay: true });
      case 'mouseleave':
        return this.setState({ showOverlay: false });
      default:
        return console.warn(`No case for event type: ${type}`);
    }
  }

  render() {
    const { title, description, links, accentKey } = this.props;
    const { showOverlay } = this.state;
    return (
      <Box
        basis="medium"
        margin="xsmall"
        onMouseEnter={this.handleEvent}
        onMouseLeave={this.handleEvent}
      >
        <OverlayLinkBox
          accentKey={accentKey}
          showOverlay={showOverlay}
          links={links}
        >            
          <Box height="small">
            <Image
              src="https://via.placeholder.com/300x150"
              fit="cover"
            />
          </Box>
          <Text
            size="large"
            weight="bold"
            margin={{ vertical: "small" }}
          >
            {title}
          </Text>
          <Box height="small">
            <Text>
              {description}
            </Text>
          </Box>
        </OverlayLinkBox>
      </Box>
    );
  }
} 
export default ProjectCard;