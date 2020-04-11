import React from 'react';
import styled from 'styled-components'
import TodoListTemplate from './components/TodoListTemplate'
import colors from './components/colors'
import { hoverCss } from './components/mixins'

const Background = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: auto;
`
const Button = styled.a`
  display: block;
  position: absolute;
  text-align: center;
  bottom: 0;
  right: 0;
  padding: 15px;
  margin: 15px;
  background-color: ${colors.main};
  border-radius: ${colors.radius};
  transition: all .2s ease-in-out;
  box-shadow: ${colors.drop_shadow};
  text-decoration: none;
  color: ${colors.white};

  &:visited {
    text-decoration: none;
    }
    
  &:hover{
    ${hoverCss}
    transform: scale(1.1);
  }
`

const Todoiee = () => {
  return (
    <Background>
      <TodoListTemplate />
      <Button href='http://www.linkedin.com/in/hyun-sung-kim-67ab65128/' target="_blank">About Me</Button>
    </Background>
  );
}

export default Todoiee;
