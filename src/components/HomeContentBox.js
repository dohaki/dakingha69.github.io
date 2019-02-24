import React, { useContext } from 'react';
import { Box, Heading, Anchor } from 'grommet';
import Typist from 'react-typist';

import { ThemeContext } from '../contexts/theme';

const HomeContentBox = ({ subTitles }) => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <Box width="250px">
      <Heading>
        DH
        <Anchor onClick={() => toggleTheme()}>.</Anchor>
        Kim
      </Heading>
      <Box height="50px">
        <Typist cursor={{ show: false }} avgTypingDelay={100}>
          {subTitles.map((subTitle, i) => (
            <div key={i}>
              <span>{subTitle}</span>
              <Typist.Backspace
                count={i !== subTitles.length - 1 ? subTitle.length : 0}
                delay={2000}
              />
            </div>
          ))}
        </Typist>
      </Box>
    </Box>
  );
};

export default HomeContentBox;
