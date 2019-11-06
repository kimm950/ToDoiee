import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Form from './Form'
import ItemList from './ItemList'
import DeleteModal from './DeleteModal'

const TodoListTemplatePanel = styled.div`
  width: 30vw;
  min-width: 340px;
  box-shadow: 0px 1px 6px 0px rgba(51,51,51,0.3);
  min-height: 30vh;
  margin: 0 auto;
  margin-top: 5%;
  border-radius: 5px;
  background-color: #fff;

  .title{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    font-weight: bold;
    font-family: Helvetica;
    font-size: 24px;
    background-color: #FF461E;
    color: #FFF;
    box-shadow: 0px 1px 6px 0px rgba(51,51,51,0.3);
    border-radius: 5px 5px 0px 0px;
  }

  .form-wrapper{
    padding: 8px;
    border-bottom: 1px dashed rgba(51,51,51,0.3);
    height: 8vh;
  }

  .children-wrapper{
    min-height: 10vh;
    padding: 8px;

  }
`
class TodoListTemplate extends Component {
  id = 3;
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      isDeleteModalOpen: false,
      deleteId: null,
      todos: [
        { id: 0, text: 'Meeting with biz', isChecked: true },
        { id: 1, text: 'Mockup user-flow', isChecked: false },
        { id: 2, text: 'Git PR review', isChecked: true },
      ]
    }
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', //clear the input values
      todos: todos.concat({
        id: this.id++,
        text: input,
        isChecked: false
      })
    })
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // selected todo

    const nextTodos = [...todos]; // copy the row

    nextTodos[index] = {
      ...selected,
      isChecked: !selected.isChecked
    };
    this.setState({
      todos: nextTodos
    });
  }

  // toggleDeleteModal
  handleDelete = (id) => {
    console.log("handleDelete", id);
    this.setState({
      isDeleteModalOpen: !this.state.isDeleteModalOpen,
      deleteId: this.state.deleteId ? null : id,
    })
  }

  deleteAction = (id) => {
    console.log("deleteAction", id)
    const { todos } = this.state;
    this.setState({
      isDeleteModalOpen: !this.state.isDeleteModalOpen,
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    console.log('state', this.state);
    const { input, todos, isDeleteModalOpen } = this.state;
    return (
      <Fragment>
        <TodoListTemplatePanel>
          <div className="title">
            <p>To Do Today</p>
          </div>
          <div className="form-wrapper">
            <Form
              value={input}
              onChange={this.handleChange}
              onCreate={this.handleCreate}
              onKeyPress={this.handleKeyPress}
            />
          </div>
          <div className="children-wrapper">
            <ItemList
              todos={todos}
              deleteId={this.state.deleteId}
              onToggle={this.handleToggle}
              onDelete={() => this.handleDelete}
            />
          </div>
        </TodoListTemplatePanel>
        {
          isDeleteModalOpen && (<DeleteModal deleteId={this.state.deleteId} onCancel={this.handleDelete} onConfirm={this.deleteAction} />)
        }
      </Fragment>
    );
  };
};

export default TodoListTemplate;