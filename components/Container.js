import React from 'react'
import Highlight from 'react-highlight'
import Intro from './Intro'
import Pathological from './Pathological'
import PathologicalSource from '!raw-loader!Components/Pathological.js'
import FixRender from './Fix-render'
import FixRenderSource from '!raw-loader!Components/Fix-render.js'
import FixScu from './Fix-scu'
import FixScuSource from '!raw-loader!Components/Fix-scu'
import FixNoRender from './Fix-no-render.js'
import FixNoRenderSource from '!raw-loader!Components/Fix-no-render.js'
import Conclusions from './Conclusions'

const Container = React.createClass ( {
  render ( ) {
    let Panel
    let source = false
    switch ( this.props.panel ) {
      case 'problem':
        Panel = Pathological
        source = PathologicalSource
        break
      case 'solution 1':
        Panel = FixRender
        source = FixRenderSource
        break
      case 'solution 2':
        Panel = FixScu
        source = FixScuSource
        break
      case 'solution 3':
        Panel = FixNoRender
        source = FixNoRenderSource
        break
      case 'conclusions':
        Panel = Conclusions
        break
      case 'intro':
      default:
        Panel = Intro
        break
    }
    return <div style={{ marginBottom: '50px' }} >
      {
        this.props.code && source
          ? <Highlight className="javascript">{source}</Highlight>
          : <Panel />
      }
    </div>
  }
} )

export default Container
