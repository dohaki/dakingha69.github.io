import React, { Component } from 'react';

import ProjectList from '../components/ProjectList';

import { PROJECTS } from '../constants';

class ProjectListContainer extends Component {
  state = {
    projects: []
  }

  componentDidMount() {
    this.setState({ projects: PROJECTS });
  }

  render() { 
    return (
      <ProjectList projects={this.state.projects} />
    );
  }
}
 
export default ProjectListContainer;