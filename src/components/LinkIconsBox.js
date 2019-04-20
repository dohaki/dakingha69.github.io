import React from 'react';
import { Anchor, Box } from 'grommet';
import { Github, Link, Attachment } from 'grommet-icons';

const ICON_MAP = {
  github: <Github size="large" />,
  url: <Link size="large" />,
  file: <Attachment size="large" />,
};

const LinkIconsBox = ({ links }) => (
  <Box direction="row">
    {Object.keys(links).map((linkKey, i) => (
      <Anchor key={i} icon={ICON_MAP[linkKey]} href={links[linkKey]} />
    ))}
  </Box>
);

export default LinkIconsBox;
