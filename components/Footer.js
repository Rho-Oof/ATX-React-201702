import React from 'react'
import cx from 'classnames'

const Footer = React.createClass ( {
  render ( ) {
    return <div style={{ position: 'fixed', bottom: '0px', width: '100%' }} >
      <div className="btn-group btn-group-justified" role="group" aria-label="...">
        <div className="btn-group" role="group">
          <button 
            type="button" 
            className={cx ( 'btn', 'btn-default', { 'btn-primary': !this.props.type } )}
            onClick={this.props.toggle} 
            disabled={!this.props.type}>Rendered</button>
        </div>
        <div className="btn-group" role="group">
          <button 
            type="button" 
            className={cx ( 'btn', 'btn-default', { 'btn-primary': this.props.type } )}
            onClick={this.props.toggle} 
            disabled={this.props.type}>Code</button>
        </div>
      </div>
    </div>
  }
} )

export default Footer
