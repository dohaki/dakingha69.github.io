import React from 'react';
import { Grid } from 'grommet';

import ProjectCard from '../components/ProjectCard';

const ProjectList = ({ projects }) => {
  return (
    <Grid direction="row" columns="medium">
    {
      projects.map((project, i) => (
        <ProjectCard
          key={i}
          accentKey={i}
          title={project.title}
          description={project.description}
          links={project.links}
        />
      ))
    }
    </Grid>
  );
}
 
export default ProjectList;