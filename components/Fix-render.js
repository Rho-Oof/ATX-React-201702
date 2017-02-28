import React from 'react'
import Perf from 'react-addons-perf'
import list from '../data.json'
import Controls from './Controls'
import Data from './Data'

const ListElement = React.createClass ( {
  render ( ) {
    const show = ! this.props.all || this.props.data.visible
    return <li className={show ? 'list-group-item' : 'hidden'} ><Data {...this.props.data}/>
    </li>
  }
} )

const FixFastRender = React.createClass ( {
  getInitialState ( ) {
    return { active: 'intro', type: false }
  },
  toggle ( ) {
    this.setState ( { type: ! this.state.type } )
    Perf.start ( )
  },
  componentDidUpdate() {
    Perf.stop()
    Perf.printInclusive()
    Perf.printWasted()
  },
  render ( ) {
    return <div style={{ marginBottom: '50px' }} >
      <Controls toggle={this.toggle} type={this.state.type} />
      <ul className="list-group">
        {list.map ( el => <ListElement data={el} key={el.id} all={this.state.type} /> ) }
      </ul>
    </div>
  }
} )

export default FixFastRender
