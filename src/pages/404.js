import React from 'react';

import PageTemplate from '../components/PageTemplate';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout title="404">
    <PageTemplate title="NOT FOUND">
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </PageTemplate>
  </Layout>
);

export default NotFoundPage;
