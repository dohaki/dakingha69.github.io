import React, { Component } from 'react';

import SkillList from '../components/SkillList';

import { SKILLS, SKILL_CATEGORIES } from '../constants';

class SkillListContainer extends Component {
  render() {
    return <SkillList skills={SKILLS} skillCategories={SKILL_CATEGORIES} />;
  }
}

export default SkillListContainer;
