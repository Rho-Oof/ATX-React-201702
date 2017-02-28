import React from 'react'

const Intro = React.createClass ( {
  render ( ) {
    return <article className='panel'>
      <h1>React performance problems</h1>
      <p>the most common react performance problems come from too many components needing to update on the page for every render</p>
    </article>
  }
} )

export default Intro
