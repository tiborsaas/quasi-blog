import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'

import '../styles/main.scss'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
 
    return (
      <div>
        <Helmet title={siteTitle} />
        { 
          posts.map((post, i) => {
            return <article key={i}>
              <h2><Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link></h2>
              <p>{post.node.frontmatter.date}</p>
              <p>{post.node.excerpt}</p>
            </article>
          })
        }
        <hr />
        <Bio />
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
