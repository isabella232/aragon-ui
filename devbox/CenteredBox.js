import React from 'react'
import styled from 'styled-components'
import { unselectable } from '@aragon/ui'

const CenteredBox = ({
  children,
  width = 'auto',
  center = ['h', 'v'],
  background = 'transparent',
  style = {},
}) => (
  <Main center={center} background={background} style={style}>
    <div style={{ width }}>{children}</div>
  </Main>
)

const Main = styled.div`
  ${unselectable};
  display: flex;
  flex-direction: column;
  justify-content: ${({ center }) =>
    center.includes('v') ? 'center' : 'flex-start'};
  align-items: ${({ center }) =>
    center.includes('h') ? 'center' : 'flex-start'};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ background }) => background};
`

export default CenteredBox
