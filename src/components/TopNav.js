import React from 'react';
import { navigate } from 'gatsby-link';
import { Box, Button, Menu } from 'grommet';
import { Home } from 'grommet-icons';

import { PAGES } from '../constants';

const TopNav = (props) => (
  <Box
    direction="row"
    style={{ justifyContent: 'space-around' }}
  >
    <Button
      icon={<Home />}
      onClick={() => navigate('/')}
    />
    <Menu
      label="Go to"
      items={PAGES.map(({ to, name }) => ({
        label: name,
        onClick: () => navigate(to)
      }))}
    />
  </Box>
);

export default TopNav;
