import React from 'react'

const Intro = React.createClass ( {
  render ( ) {
    return <article className='panel'>
      <h1>React performance problems</h1>
      <h3>this project is available <a href="https://github.com/robert-ostensen/ATX-React-201702">https://github.com/robert-ostensen/ATX-React-201702</a></h3>
      <h3>the most common react performance problems come from too many components needing to update on the page for every render</h3>
    </article>
  }
} )

export default Intro
