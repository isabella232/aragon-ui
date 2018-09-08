import React from 'react'
import ReactDOM from 'react-dom'
import { AragonApp } from '@aragon/ui'

// import App from './apps/LinkedSliders'
// import App from './apps/RadioButton'
// import App from './apps/SidePanel'
import App from './apps/NavigationBar'

ReactDOM.render(
  <AragonApp publicUrl="/aragon-ui/">
    <App />
  </AragonApp>,
  document.getElementById('app')
)
