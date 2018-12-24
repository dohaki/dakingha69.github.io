import React from 'react';
import { Box, Meter, Text } from 'grommet';

const SkillMeter = ({ name, level }) => {
  return (
    <Box>
      <Text>
        {name}
      </Text>
      <Meter
        type="bar"
        values={[{ value: level }]}
        margin={{ vertical: "small" }}
        background="light-2"
      />
    </Box>
  );
}
 
export default SkillMeter;