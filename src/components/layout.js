import React from "react"
import { css } from "@emotion/core"
import { Link, graphql, useStaticQuery } from "gatsby"
import { rhythm } from "../utils/typography"
import Header from './Header'

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
query{
  site {
    siteMetadata{
      title
    }
  }
} `
  )
  return (
    
  <div
    css={css`
      margin: 0 auto;
      max-width: 1000px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
    `}
  >
    <Header />
    <Link to={`/`}>
      <h3
        css={css`
          margin-bottom: ${rhythm(2)};
          display: inline-block;
          font-style: normal;
        `}
      >
        {data.site.siteMetadata.title}
      </h3>
    </Link>
    <Link
      to={`/about/`}
      css={css`
        float: right;
      `}
    >
      About
    </Link>
  
    {children}
  </div>
)
  }