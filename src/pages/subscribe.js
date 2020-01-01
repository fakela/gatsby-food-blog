import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Container from '../components/container';
import Subscribe from '../components/forms/subscribe';

export default ({ data: { site } }) => (
  <Layout site={site} noFooter>
    <Container>
      <Subscribe />
    </Container>
  </Layout>
)

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`
