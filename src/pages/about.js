import React from 'react';
import { Anchor, Box, Heading, Paragraph } from 'grommet';

import PageTemplate from '../components/PageTemplate';
import SkillBox from '../components/SkillBox';

import { CATEGORIES, SKILLS } from '../constants';

const AboutPage = () => (
  <PageTemplate title="Hello world!">
    <Box align="center">
      <Paragraph>
        Welcome to my website. My name is Dong-Ha Kim and I am
        a Fullstack Javascript Developer, Blockchain Enthusiast and
        M. Sc. Student at the TU Berlin.
      </Paragraph>
      <Paragraph>
        This site is unfortunately still WIP. You will find different
        projects and blog posts of mine in the near future here. Until
        then check out my&nbsp;
        <Anchor label="github" href="https://github.com/dakingha69" />
        .
      </Paragraph>
      <Heading>
        Skills
      </Heading>
      <Paragraph>
        Below you can find a list of my skills with an estimated level on how
        proficient I see myself.
      </Paragraph>
      {CATEGORIES && CATEGORIES.map(category => (
        <SkillBox
          key={category}
          category={category}
          skills={SKILLS.filter(skill => skill.category === category)}
        />
      ))}
      <SkillBox></SkillBox>
      <Paragraph>
        Some more things I like are
        FOOD <span role="img" aria-label="food">😋</span>,
        TECHNO <span role="img" aria-label="dance">🕺</span>,
        GAMES <span role="img" aria-label="game">🎮</span>
        and CATS <span role="img" aria-label="cats">🐱</span>.
      </Paragraph>
    </Box>
  </PageTemplate>
);

export default AboutPage;
