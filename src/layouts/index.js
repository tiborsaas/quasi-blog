import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'

import { rhythm, scale } from '../utils/typography'
import merriweather from 'typeface-merriweather';
import montserrat from 'typeface-montserrat';

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }
    const { data } = this.props

    return (
      <Container
        style={{
          maxWidth: rhythm(28),
          fontFamily: 'merriweather',
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }} to={'/'}>{data.site.siteMetadata.title}</Link>
        </h1>

        <p className='metaTitle'>{data.site.siteMetadata.description}</p>

        {children()}
      </Container>
    )
  }
}

export default Template

export const pageQuery = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`