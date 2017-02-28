import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Container from './Container'

const Page = React.createClass ( {
  getInitialState ( ) {
    return { active: 'intro', type: false }
  },
  toggle ( ) {
    this.setState ( { type: ! this.state.type } )
  },
  select ( page ) {
    this.setState ( { active: page, count: 0 } )
  },
  prev ( ) {
    const tabs = [ 'intro', 'problem', 'solution 1', 'solution 2', 'solution 3', 'conclusions' ]
    let current = tabs.indexOf ( this.state.active )
    if ( ! current )
      current = tabs.length - 1
    else 
      current--
    this.setState ( { active: tabs [ current ] } )
  },
  next ( ) {
    const tabs = [ 'intro', 'problem', 'solution 1', 'solution 2', 'solution 3', 'conclusions' ]
    let current = tabs.indexOf ( this.state.active )
    if ( current + 1 >= tabs.length )
      current = 0
    else 
      current++
    this.setState ( { active: tabs [ current ] } )
  },
  componentDidMount ( ) {
    document.body.addEventListener ( 'keydown', ( evt ) => {
      if ( evt.keyCode === 37 ) {
        this.prev ( )
      }
      if ( evt.keyCode === 39 || evt.keyCode === 32 ) {
        this.next ( )
      }
      if ( evt.keyCode === 84 ) {
        if ( this.interval ) {
          clearInterval ( this.interval )
          this.interval = undefined
        } else {
          let count = 0
          this.interval = setInterval ( () => this.setState ( { count: count++ } ), 500 )
        }
      }
    } )
  },
  render ( ) {
    return <div>
      <Header select={this.select} active={this.state.active} count={this.state.count} />
      <Container panel={this.state.active} code={this.state.type} />
      <Footer toggle={this.toggle} type={this.state.type} />
    </div>
  }
} )

export default Page
