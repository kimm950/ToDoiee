import React, { Component, Fragment } from "react"
import styled from 'styled-components'
import Item from './Item'

const ItemListContainer = styled.div`

`

class ItemList extends Component {

  render() {
    const { todos, onToggle, onDelete } = this.props;
    return (
      <Fragment>
        <ItemListContainer>
          {todos.map(
            ({ id, text, isChecked }) => (
              <Item
                id={id}
                text={text}
                isChecked={isChecked}
                onToggle={onToggle}
                onDelete={onDelete(id)}
                key={id}
              />
            )
          )}
        </ItemListContainer>
      </Fragment>
    );
  }
}

export default ItemList;
