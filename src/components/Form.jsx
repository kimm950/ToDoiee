import React from 'react'
import styled from 'styled-components'
import colors from './colors'
import { hoverCss } from './mixins'

const FormContainer = styled.div`
  display: flex;
  height: 8vh;

  .todo-input {
    flex: 1;
    border-style: none;
    padding-left: 10px;
    margin-right: 8px;
    font-size: 18px;
}
  .create-button {
    background-color: ${colors.main};
    color: ${colors.white};
    border-style: none;
    border-radius: ${colors.radius};
    width: 80px;
    box-shadow: ${colors.drop_shadow};
    font-size: 18px;
    transition: all 0.2s;
    &:hover {
      ${hoverCss}
      background-color: ${colors.white};
      color: ${colors.main};
      border: 0.5px solid;
    }
  }
`

const Form = ({ value, onChange, onCreate, onKeyPress, placeholder }) => {
  return (
    <FormContainer>
      <input
        className="todo-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button
        className="create-button"
        onClick={onCreate}>
        Add
      </button>
    </FormContainer>
  )
}

export default Form;