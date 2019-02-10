import React from 'react';
import Helmet from 'react-helmet';
import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes';

const Layout = ({ children, title = 'DH.Kim' }) => {
  return (
    <Grommet theme={grommet} style={{ height: '100%' }}>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: 'Website of Dong-Ha Kim' },
          {
            name: 'keywords',
            content:
              'web development, blockchain, student, blog, javascript, dongha, kim, dong-ha',
          },
        ]}
      />
      {children}
    </Grommet>
  );
};

export default Layout;
