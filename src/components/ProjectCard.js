import React, { Component } from 'react';
import { Box, Image, Text } from 'grommet';

import OverlayLinksBox from './OverlayLinksBox';

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
      case 'click':
        return this.setState(({ showOverlay }) => ({ showOverlay: !showOverlay }));
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
        onClick={this.handleEvent}
      >
        <OverlayLinksBox
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
        </OverlayLinksBox>
      </Box>
    );
  }
} 
export default ProjectCard;