import React, { useContext } from 'react';
import { Box, Heading } from 'grommet';
import * as themes from 'grommet/themes';

import { ThemeContext } from '../contexts/theme';

import TopNav from './TopNav';

const PageTemplate = ({ title, children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Box animation="fadeIn" background={themes[theme].global.colors.background}>
      <TopNav />
      <Heading alignSelf="center">{title}</Heading>
      {children}
    </Box>
  );
};

export default PageTemplate;
