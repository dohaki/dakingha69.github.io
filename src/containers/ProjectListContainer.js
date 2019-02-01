import React, { Component } from 'react';

import ProjectList from '../components/ProjectList';

import { PROJECTS } from '../constants';

class ProjectListContainer extends Component {
  render() {
    return <ProjectList projects={PROJECTS} />;
  }
}

export default ProjectListContainer;
