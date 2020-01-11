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
  margin: 0 auto;
  margin-top: 5%;
  border-radius: ${colors.radius};
  background-color: ${colors.white};

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    font-weight: bold;
    font-family: Helvetica;
    font-size: 24px;
    background-color: ${colors.main};
    color: ${colors.white};
    box-shadow: ${colors.drop_shadow};
    border-radius: 5px 5px 0px 0px;
  }

  .form-wrapper {
    padding: 8px;
    border-bottom: 1px dashed rgba(51,51,51,0.3);
    height: 8vh;
  }

  .children-wrapper {
    padding: 8px;
  }

  .toggle-list {
    justify-content: center;
    text-align: center;
    color: ${colors.main} ;
    padding: 10px;
    font-weight: bold;
    &:hover {
      cursor: pointer;
    }
  }
`
class TodoListTemplate extends Component {
  id = 3;
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      isDeleteModalOpen: false,
      isValid: false,
      isItemListOpen: true,
      deleteId: null,
      placeholder: "Today I have to do.....",
      todos: [
        { id: 0, text: 'Meeting with biz', isChecked: true },
        { id: 1, text: 'Mockup user-flow', isChecked: false },
      ]
    }
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value, isValid: true });
  }

  createAction = () => {
    const { input, todos, isItemListOpen } = this.state;
    const isValid = input.trim();
    if (!isValid) {
      this.setState({ input: '', placeholder: "You must insert text" })
    }
    else {
      this.setState({
        input: '', //clear the input values
        placeholder: "Today I have to do.....",
        todos: todos.concat({
          id: this.id++,
          text: input,
          isChecked: false
        }),
      })
    }
    if (isValid && isItemListOpen === true) {
      this.toggleItemList()
    } else {
      return false
    }
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.createAction();
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

  // toggle DeleteModal
  toggleDeleteModal = (id) => {
    console.log("toggleDeleteModal", id);
    this.setState({
      isDeleteModalOpen: !this.state.isDeleteModalOpen,
      deleteId: this.state.deleteId ? null : id,
    })
  }
  //toggle ItemList
  toggleItemList = () => { this.setState({ isItemListOpen: !this.state.isItemListOpen }) }

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
    const { input, todos, isDeleteModalOpen, isItemListOpen, placeholder } = this.state;
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
              placeholder={placeholder}
            />
          </div>
          <div className='children-wrapper'>
            {isItemListOpen ? (
              <div className='toggle-list' onClick={this.toggleItemList}> Open &#9660; </div>
            ) : (
                <>
                  <ItemList
                    todos={todos}
                    deleteId={this.state.deleteId}
                    onToggle={this.handleCheckMark}
                    onDelete={() => this.toggleDeleteModal}
                  />
                  <div className='toggle-list' onClick={this.toggleItemList}> Close &#9650; </div>
                </>

              )}
          </div>
        </TodoListTemplatePanel>
        {isDeleteModalOpen && (
          <DeleteModal
            deleteId={this.state.deleteId}
            onCancel={this.toggleDeleteModal}
            onConfirm={this.deleteAction}
          />
        )}
      </Fragment>
    );
  };
};

export default TodoListTemplate;