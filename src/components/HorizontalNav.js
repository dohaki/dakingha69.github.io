import React from 'react';
import { navigate } from 'gatsby-link';
import { Box } from 'grommet';

import RotatedAnchor from './RotatedAnchor';

const HorizontalNav = ({ direction, link, name, onPageLeave }) => (
  <Box
    justify="center"
    width="xsmall"
  >
    <RotatedAnchor
      direction={direction}
      color="dark-1"
      label={name}
      onClick={() => {
        onPageLeave(name);
        setTimeout(() => {
          navigate(link);
        }, 1000);
      }}
    />
  </Box>  
);

export default HorizontalNav;
