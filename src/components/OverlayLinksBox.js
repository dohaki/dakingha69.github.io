import React from 'react';
import { Box, Stack } from 'grommet';

import LinkIconsBox from './LinkIconsBox';

const OverlayLinksBox =  ({ children, links, showOverlay, accentKey }) => {
  return (
    <Stack>
      <Box>
        {children}
      </Box>
      {
        showOverlay && (
          <Box
            fill
            align="center"
            justify="center"
            background={{
              color: `accent-${accentKey % 4 + 1}`,
              opacity: 'strong'
            }}
          >
            <LinkIconsBox links={links} />
          </Box>
        )
      }
    </Stack>
  );
}
 
export default OverlayLinksBox;