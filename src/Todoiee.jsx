import React, { Component } from 'react';
import styled from 'styled-components'
import TodoListTemplate from './components/TodoListTemplate'

const Background = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
`

class Todoiee extends Component {
  render() {
    return (
      <Background>
        <TodoListTemplate />
      </Background>
    );
  }
}

export default Todoiee;
