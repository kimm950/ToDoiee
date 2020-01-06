import React, { Component } from 'react';
import styled from 'styled-components';

const DarkOverlay = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  z-index: 100;
`


class ModalPortal extends Component {

  render() {
    const { children, zIndex } = this.props
    return (
      <div>
        <DarkOverlay zIndex={zIndex} />
        {children}
      </div>
    )
  }
}

export default ModalPortal