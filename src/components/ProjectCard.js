import React from 'react';
import { Box, Image, Text, Heading } from 'grommet';

const ProjectCard = ({ title, description }) => {
  return (
    <Box
      basis="medium"
      height="medium"
      margin="xsmall"
    >
      <Box height="small">
        <Image
          src="https://via.placeholder.com/300x150"
          fit="cover"
        />
      </Box>
      <Heading size="small">
        {title}
      </Heading>
      <Text>
        {description}
      </Text>
    </Box>
  );
}
 
export default ProjectCard;