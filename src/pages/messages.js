import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Message from '../components/ConfirmMessage/Message'
import {
  PleaseConfirmIllustration,
  ThankYouIllustration,
  UnsubscribeIllustration,
} from '../components/ConfirmMessage/Illustrations'

export default ({ data: { site, allMdx, latestArticle } }) => {
  return (
    <Layout site={site} noSubscribeForm>
      
      <div>
        {latestArticle.edges.map(({ node: post }) => (
          <Message
            fullscreen
            key={post.id}
            illustration={ThankYouIllustration}
            title={`Welcome! Thank you!👍`}
            body={`In case you haven’t seen already, here’s my latest article:`}
            articleTitle={post.frontmatter.title}
            articleSlug={post.frontmatter.slug}
          />
        ))}
      </div>
      <div>
        <Message
          fullscreen
          illustration={UnsubscribeIllustration}
          title={`You have been unsubscribed 😞.`}
          body={`As per your request, you have been unsubscribed from all our mailing list.`}
          note={`Changed your mind?😉 [Click here to resubscribe](/subscribe)`}
        />
      </div>
    </Layout>
  )
}

export const latestArticle = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    latestArticle: allMdx(
      limit: 1
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            title
            slug
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")

            slug
          }
        }
      }
    }
  }
`
