import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import { Grommet } from 'grommet';
import * as themes from 'grommet/themes';

import { ThemeContext } from '../contexts/theme';

const Layout = ({ children, title }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Grommet theme={themes[theme]} style={{ height: '100%' }}>
      <Helmet
        title={`${title && `${title} | `}DH.Kim`}
        meta={[
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
