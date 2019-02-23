import React from 'react';
import { navigate } from 'gatsby';
import { Anchor, Box } from 'grommet';

const VerticalNav = ({ link, name, onPageLeave }) => {
  return (
    <Box justify="center" pad="medium">
      <Anchor
        color="dark-1"
        label={name}
        onClick={() => {
          onPageLeave(name);
          setTimeout(() => {
            navigate(link);
          }, 1000);
        }}
      />
    </Box>
  );
};

export default VerticalNav;
