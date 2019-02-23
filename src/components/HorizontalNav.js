import React from 'react';
import { navigate } from 'gatsby';
import { Box } from 'grommet';

import RotatedAnchor from './RotatedAnchor';

const HorizontalNav = ({ direction, link, name, onPageLeave }) => {
  return (
    <Box justify="center" width="xsmall">
      <RotatedAnchor
        direction={direction}
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
};

export default HorizontalNav;
