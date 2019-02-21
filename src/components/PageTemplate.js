import React from 'react';
import { Box, Heading } from 'grommet';

import Layout from './Layout';
import TopNav from './TopNav';

const PageTemplate = ({ title, children }) => {
  return (
    <Layout title={title}>
      <Box animation="fadeIn">
        <TopNav />
        <Heading alignSelf="center">{title}</Heading>
        {children}
      </Box>
    </Layout>
  );
};

export default PageTemplate;
