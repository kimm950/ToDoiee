import React from 'react';
import styled from 'styled-components';
import colors from './colors';
import ModalPortal from './ModalPortal'

const ModalContainer = styled.div`
  width: 30vw;
  height: 20vh;
  background-color: ${colors.white};
  box-shadow: ${colors.drop_shadow};
  border-radius: ${colors.radius};
  padding: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: ${props => (props.overFlow ? 'auto' : 'unset')};

  > h1 {
    margin-bottom: 60px;
    color: ${colors.main_red};
  }

  > button {
      background: ${colors.main_red};
      color: ${colors.white};
      border-style: none;
      border-radius: 5px;
      width: 150px;
      height: 40px;
      margin-right: 10px;
      box-shadow: ${colors.drop_shadow};
    } 
`

const DeleteModal = ({ deleteId, onCancel, onConfirm }) => {
  console.log(deleteId)
  return (
    <ModalPortal>
      <ModalContainer>
        <h1>Are You Sure?</h1>
        <button onClick={() => onCancel()}>Cancel</button>
        <button onClick={() => onConfirm(deleteId)}>Yes</button>
      </ModalContainer>
    </ModalPortal>
  );
}

export default DeleteModal;