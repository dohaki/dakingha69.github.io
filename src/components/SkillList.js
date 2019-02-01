import React from 'react';

import SkillBox from './SkillBox';

const SkillList = ({ skills, skillCategories }) => {
  return skillCategories.map((category, i) => (
    <SkillBox
      key={i}
      category={category}
      skills={skills.filter(skill => skill.category === category)}
    />
  ));
};

export default SkillList;
