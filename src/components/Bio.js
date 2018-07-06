import React from 'react'

import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        marginBottom: rhythm(2.5),
      }}>
        <p>Written by Tibor Szász | Check out my portfolio: <a href="http://tibor.szasz.hu">http://tibor.szasz.hu</a></p>
      </div>
    )
  }
}

export default Bio
