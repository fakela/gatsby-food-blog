import React from 'react';
import { Link } from 'gatsby';

export default () => {
  return (
    <React.Fragment>
      <Link to="#" activeClassName="active" aria-label="View blog page">
        Blog
      </Link>
      <Link to="#" activeClassName="active" aria-label="View blog page">
        About
      </Link>
      <Link to="#" activeClassName="active" aria-label="View blog page">
        Contact
      </Link>

    </React.Fragment>
  )
}