import React from 'react';
import { Box, Stack } from 'grommet';

const OverlayLinkBox =  ({ children, links, showOverlay, accentKey }) => {
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
              opacity: true
            }}
          >
            LINKS
          </Box>
        )
      }
    </Stack>
  );
}
 
export default OverlayLinkBox;