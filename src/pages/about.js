import React from 'react';
import { Box, Heading } from 'grommet';

import Layout from '../components/Layout';
import TopNav from '../components/TopNav';

const AboutPage = () => (
  <Layout>
    <Box>
      <TopNav />
      <Heading>
        Hello world!
      </Heading>
    </Box>
  </Layout>
);

export default AboutPage;
