import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { useTheme } from '../../../styles/theme'
import Links from './links'



const Header = ({ siteTitle }) => {
  const theme = useTheme()
  return (
    <header
      css={css`
        width: 100%;
        flex-shrink: 0;
        background: none;
        padding: 10px 0;
        background: ${theme.colors.headerBg};
      `}
    >
        <nav
          css={css`
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <Link
            to="/"
            aria-label="homepage"
            css={css`
              color: white;
              &:hover {
                color: white;
                text-decoration: none;
              }
            `}
          >
            {siteTitle}
          </Link>
          <div
            css={css`
              font-size: 18px;
              line-height: 1.5;
              display: flex;
              align-items: center;
              a {
                text-decoration: none;
                color: ${theme.colors.white};
                margin-left: 16px;
                margin-right: 16px;
              }
              .active {
                display: none;
                visibility: hidden;
              }
            `}
          >
            <div
              css={css`
                display: flex;
                align-items: center;
                 {
                  display: none;
                }
              `}
            >
              <Links />
            </div>
          </div>
        </nav>
     
    </header>
  )
}

const IndexHeader = props => (

  <StaticQuery

    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

    render={data => (
        
      <Header siteTitle={data.site.siteMetadata.title} {...props} />
    )}
  />
)

export default IndexHeader
