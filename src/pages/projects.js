import React from 'react';
import { Box } from 'grommet';

import PageTemplate from '../components/PageTemplate';
import Layout from '../components/Layout';

import ProjectListContainer from '../containers/ProjectListContainer';

const ProjectsPage = () => (
  <Layout title="Projects">
    <PageTemplate title="My projects">
      <Box pad={{ horizontal: 'medium' }}>
        <ProjectListContainer />
      </Box>
    </PageTemplate>
  </Layout>
);

export default ProjectsPage;
