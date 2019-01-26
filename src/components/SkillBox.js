import React from 'react';
import { Box, Heading } from 'grommet';

import SkillMeter from './SkillMeter';

const SkillBox = ({ category, skills }) => {
  return (
    <Box align="center" pad={{ vertical: 'medium' }}>
      <Heading size="small">{category}</Heading>
      {skills &&
        skills.map(({ name, level }) => (
          <SkillMeter key={name} name={name} level={level} />
        ))}
    </Box>
  );
};

export default SkillBox;
