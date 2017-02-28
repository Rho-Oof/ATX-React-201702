import React from 'react'

const Conclusions = React.createClass ( {
  render ( ) {
    return <div>
      <ul>
       <li>Don't waste time in render</li>
       <li>Do use shouldComponentUpdate or PureComponents</li>
       <li>Don't render "hidden" components or hide components via styles</li>
       <li>use <code>react-addons-perf</code> to find performance problems</li>
      </ul>
    </div>
  }
} )

export default Conclusions
