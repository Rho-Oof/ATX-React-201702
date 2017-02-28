import React from 'react'
import cx from 'classnames'

const Controls = React.createClass ( {
  render ( ) {
    return <div className="btn-group btn-group-justified" role="group" aria-label="...">
        <div className="btn-group" role="group">
          <button 
            type="button" 
            className={cx ( 'btn', 'btn-default', { 'btn-primary': !this.props.type } )}
            onClick={this.props.toggle} 
            disabled={!this.props.type}>All</button>
        </div>
        <div className="btn-group" role="group">
          <button 
            type="button" 
            className={cx ( 'btn', 'btn-default', { 'btn-primary': this.props.type } )}
            onClick={this.props.toggle} 
            disabled={this.props.type}>Partial</button>
        </div>
      </div>
  }
} )

export default Controls
