import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Form from './Form'
import ItemList from './ItemList'
import DeleteModal from './DeleteModal'
import colors from './colors'

const TodoListTemplatePanel = styled.div`
  width: 30vw;
  min-width: 340px;
  box-shadow: ${colors.drop_shadow};
  min-height: 30vh;
  margin: 0 auto;
  margin-top: 5%;
  border-radius: ${colors.radius};
  background-color: ${colors.white};

  .title{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    font-weight: bold;
    font-family: Helvetica;
    font-size: 24px;
    background-color: ${colors.main_red};
    color: ${colors.white};
    box-shadow: ${colors.drop_shadow};
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

  createAction = () => {
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

  handleCheckMark = (id) => {
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
  toggleDeleteModal = (id) => {
    console.log("toggleDeleteModal", id);
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
              onCreate={this.createAction}
              onKeyPress={this.handleKeyPress}
            />
          </div>
          <div className="children-wrapper">
            <ItemList
              todos={todos}
              deleteId={this.state.deleteId}
              onToggle={this.handleCheckMark}
              onDelete={() => this.toggleDeleteModal}
            />
          </div>
        </TodoListTemplatePanel>
        {isDeleteModalOpen && (
          <DeleteModal
            deleteId={this.state.deleteId}
            onCancel={this.toggleDeleteModal}
            onConfirm={this.deleteAction}
          />
        )
        }
      </Fragment>
    );
  };
};

export default TodoListTemplate;