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

  > h2 {
    margin: 30px 0px 50px 0px;
    color: ${colors.main};
  }

  > button {
      background: ${colors.main};
      color: ${colors.white};
      border-style: none;
      border-radius: 5px;
      width: 150px;
      height: 40px;
      margin-right: 10px;
      box-shadow: ${colors.drop_shadow};
      &:hover {
        cursor: pointer;
        box-shadow: none;
      }
    } 
`

const DeleteModal = ({ deleteId, onCancel, onConfirm }) => {
  console.log(deleteId)
  return (
    <ModalPortal>
      <ModalContainer>
        <h2>Are You Sure?</h2>
        <button onClick={() => onCancel()}>Cancel</button>
        <button onClick={() => onConfirm(deleteId)}>Yes</button>
      </ModalContainer>
    </ModalPortal>
  );
}

export default DeleteModal;