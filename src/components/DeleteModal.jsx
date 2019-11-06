import React from 'react'
import styled from 'styled-components'

const ModalContainer = styled.div`
  width: 30vw;
  height: 20vh;
  background-color: #fff;
  box-shadow: 0px 1px 6px 0px rgba(51,51,51,0.3);
  border-radius: 5px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  .button{
    
  }
`

const DeleteModal = ({ deleteId, onCancel, onConfirm }) => {
  console.log(deleteId)
  return (
    <ModalContainer>
      <p>Are You Sure?</p>
      <button onClick={() => onCancel()}>Cancel</button>
      <button onClick={() => onConfirm(deleteId)}>Yes</button>
    </ModalContainer>
  );
}

export default DeleteModal