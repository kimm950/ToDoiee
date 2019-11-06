import React from 'react'
import styled from 'styled-components'

const FormContainer = styled.div`
  display: flex;
  height: 8vh;

  .todo-input{
    flex: 1;
    border-style: none;
    padding-left: 10px;
    margin-right: 8px;
    font-size: 18px;
}
  .create-button{
    background-color: #FF461E;
    color: #FFF;
    border-style: none;
    border-radius: 5px;
    width: 80px;
    box-shadow: 0px 1px 6px 0px rgba(51,51,51,0.3);
    font-size: 18px;
    transition: all 0.2s;
    &:hover{
      background-color: #FFF;
      color: #FF461E;
      box-shadow: none;
      border: 0.5px solid;
    }
  }
`

const Form = ({ value, onChange, onCreate, onKeyPress }) => {
  return (
    <FormContainer>
      <input
        className="todo-input"
        placeholder="Today I have to do....."
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button className="create-button"
        onClick={onCreate}>
        Add
      </button>
    </FormContainer>
  )
}

export default Form;