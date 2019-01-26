import React from 'react';
import Helmet from 'react-helmet';
import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes';

import './styles.css';

const Layout = ({ children }) => {
  return (
    <Grommet theme={grommet} style={{ height: '100%' }}>
      <Helmet
        title="DH.Kim"
        meta={[
          { name: 'description', content: 'Website of Dong-Ha Kim' },
          {
            name: 'keywords',
            content: 'web development, blockchain, student, blog, javascript',
          },
        ]}
      />
      {children}
    </Grommet>
  );
};

export default Layout;
