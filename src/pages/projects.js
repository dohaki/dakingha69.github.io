import React from 'react';
import { Box } from 'grommet';

import PageTemplate from '../components/PageTemplate';
import ProjectListContainer from '../containers/ProjectListContainer';

const ProjectsPage = () => (
  <PageTemplate title="My projects">
    <Box pad={{ horizontal: 'medium' }}>
      <ProjectListContainer />
    </Box>
  </PageTemplate>
);

export default ProjectsPage;
