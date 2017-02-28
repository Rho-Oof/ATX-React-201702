import Page from 'Components/Page'
import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'highlight.js/styles/default.css'

document.addEventListener ( 'DOMContentLoaded', ( ) => {
  ReactDOM.render ( <Page/>, document.querySelector ( '#root' ) )
} )
