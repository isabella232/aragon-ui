import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Blockies from 'react-blockies'
import { Text } from '..'
import { isAddress, shortenAddress } from '../../utils'

const IDENTICON_SCALE = 3
const IDENTICON_SQUARES = 8
const IDENTICON_SIZE = IDENTICON_SQUARES * IDENTICON_SCALE
const PX_RATIO = typeof devicePixelRatio === 'undefined' ? 2 : devicePixelRatio

class IdentityBadge extends React.PureComponent {
  static propTypes = {
    entity: PropTypes.string,
    shorten: PropTypes.bool,
    fontSize: PropTypes.string,
  }
  static defaultProps = {
    entity: '',
    shorten: true,
    fontSize: 'normal',
  }
  render() {
    const { entity, shorten, fontSize, ...props } = this.props
    const address = isAddress(entity) ? entity : null
    return (
      <Main title={address} onClick={this.handleClick} {...props}>
        {address && (
          <Identicon>
            <Blockies
              seed={address}
              size={IDENTICON_SQUARES}
              scale={IDENTICON_SCALE * PX_RATIO}
            />
          </Identicon>
        )}
        <Label size={fontSize}>
          {address && shorten ? shortenAddress(address) : entity}
        </Label>
      </Main>
    )
  }
}

const Main = styled.div`
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  height: ${IDENTICON_SIZE}px;
  background: #daeaef;
  border-radius: 3px;
  cursor: default;
`

const Identicon = styled.div`
  position: relative;
  width: ${IDENTICON_SIZE}px;
  height: ${IDENTICON_SIZE}px;
  transform: scale(${1 / PX_RATIO});
  transform-origin: 0 0;
  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    opacity: 0.3;
  }
`

const Label = styled(Text)`
  padding: 0 8px;
  white-space: nowrap;
  ${Identicon} + & {
    padding: 0 8px 0 5px;
  }
`

export default IdentityBadge