import React from 'react'
import Perf from 'react-addons-perf'
import list from '../data.json'
import Controls from './Controls'
import Data from './Data'

const ListElement = React.createClass ( {
  render ( ) {
    return <li className="list-group-item"><Data {...this.props.data}/>
    </li>
  }
} )

const FixNoRender = React.createClass ( {
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
    var listToRender = this.state.type 
      ? list.filter ( el => el.visible )
      : list
    return <div style={{ marginBottom: '50px' }} >
      <Controls toggle={this.toggle} type={this.state.type} />
      <ul className="list-group">
        {listToRender.map ( el => <ListElement data={el} key={el.id} /> ) }
      </ul>
    </div>
  }
} )

export default FixNoRender
