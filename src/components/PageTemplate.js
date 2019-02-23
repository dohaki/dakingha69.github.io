import React from 'react';
import { Box, Heading } from 'grommet';

import TopNav from './TopNav';

const PageTemplate = ({ title, children }) => {
  return (
    <Box animation="fadeIn">
      <TopNav />
      <Heading alignSelf="center">{title}</Heading>
      {children}
    </Box>
  );
};

export default PageTemplate;
