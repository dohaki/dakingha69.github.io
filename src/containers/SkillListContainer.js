import React, { Component } from 'react';

import SkillBox from '../components/SkillBox';

import { SKILLS, SKILL_CATEGORIES } from '../constants';

class SkillListContainer extends Component {
  state = {
    skills: [],
    skillCategories: []
  }

  componentDidMount() {
    this.setState({
      skills: SKILLS,
      skillCategories: SKILL_CATEGORIES
    });
  }

  render() {
    const { skillCategories, skills } = this.state;
    return skillCategories.map((category, i) => (
      <SkillBox
        key={i}
        category={category}
        skills={skills.filter(skill => skill.category === category)}
      />
    ));
  }
}
 
export default SkillListContainer;