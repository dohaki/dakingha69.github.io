import React from 'react';
import { Anchor, Paragraph } from 'grommet';

import PageTemplate from '../components/PageTemplate';

const AboutPage = () => (
  <PageTemplate title="Hello world!">
    <Paragraph alignSelf="center">
      Welcome to my website. My name is Dong-Ha Kim and I am
      a Fullstack Javascript Developer, Blockchain Entusiast and
      M. Sc. Student at the TU Berlin.
    </Paragraph>
    <Paragraph alignSelf="center">
      This site is unfortunately still WIP. You will find different
      projects and blog posts of mine in the near future here. Until
      then check out my&nbsp;
      <Anchor label="github" href="https://github.com/dakingha69" />
      .
    </Paragraph>
    <Paragraph alignSelf="center">
      Some more things I like are FOOD 😋, TECHNO 🕺, GAMES 🎮 and CATS 🐱.
    </Paragraph>
  </PageTemplate>
);

export default AboutPage;
