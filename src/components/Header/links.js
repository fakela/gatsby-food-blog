import React from 'react'
import { Link } from 'gatsby'
import { useTheme } from '../Theming'
import ThemeToggler from './ThemeToggler'

export default () => {
  const theme = useTheme()
  return (
    <React.Fragment>
      <Link to="#" activeClassName="active" aria-label="View blog page">
        Blog
      </Link>
      <Link to="/messages" activeClassName="active" aria-label="View blog page">
        Subscribe
      </Link>
      <Link to="/subscribe" activeClassName="active" aria-label="View blog page">
        Contact
      </Link>

      <ThemeToggler
        css={{}}
        toggleTheme={theme.toggleTheme}
        themeName={theme.themeName}
      />
    </React.Fragment>
  )
}
