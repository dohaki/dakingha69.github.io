import React from 'react';
import { Anchor, Box } from 'grommet';
import { Github, Link, Attachment } from 'grommet-icons';

const getIconOfLink = linkKey => {
  switch (linkKey) {
    case 'github':
      return <Github size="large" />;
    case 'url':
      return <Link size="large" />;
    case 'file':
      return <Attachment size="large" />;
    default:
      break;
  }
}

const LinkIconsBox = ({ links }) => {
  return (
    <Box direction="row">
      {
        Object.keys(links).map((linkKey, i) => (
          <Anchor
            key={i}
            icon={getIconOfLink(linkKey)}
            href={links[linkKey]}
          />
        ))
      }
    </Box>
  );
}
 
export default LinkIconsBox;