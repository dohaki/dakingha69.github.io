import React from 'react';
import { navigate } from 'gatsby-link';
import { Anchor, Box, Text } from 'grommet';

import { PAGES } from '../constants';

const TopNav = props => {
  return (
    <Box direction="row" style={{ justifyContent: 'space-around' }}>
      <Box pad="small">
        <Anchor onClick={() => navigate('/')}>
          <Text color="dark-1">DH</Text>
          <Text color="brand">.</Text>
          <Text color="dark-1">Kim</Text>
        </Anchor>
      </Box>
      <Box direction="row">
        {PAGES.map(({ to, name }, i) => (
          <Box pad="small" key={i}>
            <Anchor label={name} onClick={() => navigate(to)} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TopNav;
