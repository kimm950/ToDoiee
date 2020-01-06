import React, { Component } from 'react';
import styled from 'styled-components'
import TodoListTemplate from './components/TodoListTemplate'
import colors from '../src/components/colors'

const Background = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: auto;
`
const AboutMeButton = styled.a`
  display: block;
  position: fixed;
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
    cursor: pointer;
    box-shadow: none;
    transform: scale(1.1);
  }
`

class Todoiee extends Component {
  render() {
    return (
      <Background>
        <TodoListTemplate />
        <AboutMeButton href='http://www.linkedin.com/in/hyun-sung-kim-67ab65128/' target="_blank">About Me</AboutMeButton>
      </Background>
    );
  }
}

export default Todoiee;
