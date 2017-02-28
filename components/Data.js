import React from 'react'

const Data = React.createClass ( {
  render ( ) {
    return <span>
      <span>{this.props.id}</span>
      <span>{this.props.string.replace(/^/, '  ')}</span>
    </span>
  }
} )

export default Data
