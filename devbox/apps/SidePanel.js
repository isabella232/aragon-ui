import React from 'react'
import styled from 'styled-components'
import { AppView, SidePanel, Button } from '@aragon/ui'
import CenteredBox from '../CenteredBox'

class App extends React.Component {
  state = {
    opened: false,
  }

  open = () => {
    this.setState({ opened: true })
  }
  close = () => {
    this.setState({ opened: false })
  }

  render() {
    return (
      <React.Fragment>
        <CenteredBox>
          <Button mode="secondary" compact onClick={this.open}>
            Open
          </Button>
        </CenteredBox>
        <SidePanel
          title="My Panel"
          opened={this.state.opened}
          onClose={this.close}
        >
          panel
        </SidePanel>
      </React.Fragment>
    )
  }
}

export default App
