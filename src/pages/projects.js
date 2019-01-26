import React from 'react';

import PageTemplate from '../components/PageTemplate';
import ProjectListContainer from '../containers/ProjectListContainer';

const ProjectsPage = () => (
  <PageTemplate title="My projects">
    <ProjectListContainer />
  </PageTemplate>
);

export default ProjectsPage;
