import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from 'components/Layout'
import Link from 'components/Link'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'
import { rhythm } from '../lib/typography'
import Sidebar from 'components/Sidebar'
import Img from 'gatsby-image'

const Hero = () => {
  const theme = useTheme()
  return (
    <section
      css={css`
        color: ${theme.colors.white};
        width: 100%; 
        background: ${theme.colors.primary};
        display: flex;
      `}
    >
      <Container
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <h1
          css={css`
            color: ${theme.colors.white};
            position: relative;
            z-index: 5;
            line-height: 2.0;
            margin: 0;
            max-width: ${rhythm(20)};
          `}
        >
         Food Blog Sweet Taste😋 🥘😋
         
        </h1>
      </Container>
      <div
        css={css`
          height: 150px;
          overflow: hidden;
        `}
      />
    </section>
  )
}

const Description = styled.p`
  margin-bottom: 10px;
  display: inline-block;
`

export default function Index({ data: { site, allMdx } }) {
  const theme = useTheme()
  return (
    <Layout site={site}>
      <Hero />
      <Container
        css={css`
          padding-bottom: 0;
        `}
      >
        {allMdx.edges.map(({ node: post }) => (
          <div
            key={post.id}
            css={css`
              margin-bottom: 40px;
            `}
          >
            <h2
              css={css({
                marginBottom: rhythm(0.3),
                transition: 'all 150ms ease',
                ':hover': {
                  color: theme.colors.primary,
                },
              })}
            >
              <Link
                to={post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >

                {post.frontmatter.title}

              
              </Link>
            </h2>
            <h3>
            <p
             css={css`
             font-size: 16px;
             margin-top: 9px;
           `}
            >{post.frontmatter.date}</p>
            </h3>
            <Description
            css={css`
            line-height: 1.8;
          `}
            >
              <div>
            <Img
              sizes={post.frontmatter.banner. childImageSharp.sizes}
              alt={post.frontmatter.title}
              style={{ width: "15%", marginRight: 20,float: "left" }}
            />
            </div>
              {post.excerpt}{' '}
              <Link
                to={post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                Read Article ➡️
              </Link>
            </Description>
          </div>
        ))}
        <Link to="/blog" aria-label="Visit blog page"
        >
          Read all articles
        </Link>
        <div
        css={css`
        display: flex;
        padding-top: 23px;
        padding-bottom:23px;
      `}
        >
        <Sidebar
                  title="Food Blog"
                  description="Articles on Food and Recipes. All articles are written by Favour Kelvin."
                />
                <Sidebar
                  title="About author"
                  description="Favour Kelvin is a Front-end Web Developer.I build stuff at my free time"
                />
        <hr />
        </div>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 190)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            banner {
              childImageSharp {
                sizes(maxWidth: 720) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            slug
            keywords
          }
        }
      }
    }
  }
`
