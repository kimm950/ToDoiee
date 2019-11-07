import React from 'react'
import styled from 'styled-components'
import colors from './colors'

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

  > h1 {
    margin-bottom: 60px;
    color: ${colors.main_red};
  }

  > button {
      background: ${colors.main_red};
      color: ${colors.white};
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
    <ModalContainer>
      <h1>Are You Sure?</h1>
      <button onClick={() => onCancel()}>Cancel</button>
      <button onClick={() => onConfirm(deleteId)}>Yes</button>
    </ModalContainer>
  );
}

export default DeleteModal