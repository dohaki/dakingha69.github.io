import React from 'react';
import { Anchor, Box, Heading, Paragraph } from 'grommet';

import PageTemplate from '../components/PageTemplate';

import SkillListContainer from '../containers/SkillListContainer';

const AboutPage = () => (
  <PageTemplate title="Hello world!">
    <Box align="center" pad={{ horizontal: 'small' }}>
      <Paragraph>
        Welcome to my website. My name is Dong-Ha Kim and I am a Fullstack
        Javascript Developer, Blockchain Enthusiast and M. Sc. Student at the TU
        Berlin.
      </Paragraph>
      <Paragraph>
        This site is unfortunately still WIP. You will find different projects
        and blog posts of mine in the near future here. Until then check out my
        &nbsp;&nbsp;
        <Anchor label="GitHub" href="https://github.com/dakingha69" />
        &nbsp;&nbsp; or &nbsp;{' '}
        <Anchor label="LinkedIn" href="https://www.linkedin.com/in/dhkim0210" />
        .
      </Paragraph>
      <Heading>Skills</Heading>
      <Paragraph>
        Below you can find a list of my skills with an estimated proficiency
        level.
      </Paragraph>
      <SkillListContainer />
    </Box>
  </PageTemplate>
);

export default AboutPage;
