import React from 'react';
import { Box, Grid } from 'grommet';

import PageTemplate from '../components/PageTemplate';
import ProjectCard from '../components/ProjectCard';

import { PROJECTS } from '../constants';

const ProjectsPage = () => (
  <PageTemplate
    title="My projects"
  >
    <Grid direction="row" columns="medium">
      {PROJECTS.map((project, i) => (
        <ProjectCard
          key={i}
          title={project.title}
          description={project.description}
          />
        ))}    
    </Grid>
  </PageTemplate>
);

export default ProjectsPage
