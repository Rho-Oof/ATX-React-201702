import React from 'react'

const Header = React.createClass ( {
  select ( nav ) {
    return ( evt ) => {
      this.props.select ( nav )
      evt.preventDefault ( )
    } 
  },
  render ( ) {
    const tab = this.props.active
    return <div>
      <ul className="nav nav-tabs nav-justified">
        <li role="presentation" className={tab === 'intro' && 'active'}><a href="#" onClick={this.select ( 'intro') } >Intro</a></li>
        <li role="presentation" className={tab === 'problem' && 'active'}><a href="#" onClick={this.select ( 'problem') } >Problems</a></li>
        <li role="presentation" className={tab === 'solution 1' && 'active'}><a href="#" onClick={this.select ( 'solution 1') } >Fast Render</a></li>
        <li role="presentation" className={tab === 'solution 2' && 'active'}><a href="#" onClick={this.select ( 'solution 2') } >shouldComponentUpdate</a></li>
        <li role="presentation" className={tab === 'solution 3' && 'active'}><a href="#" onClick={this.select ( 'solution 3') } >Reduce Render</a></li>
        <li role="presentation" className={tab === 'conclusions' && 'active'}><a href="#" onClick={this.select ( 'conclusions') } >Conclusions</a></li>
        <li role="presentation">Count: {this.props.count}</li>
      </ul>
    </div>
  }
} )

export default Header
