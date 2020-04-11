import React, { Fragment } from 'react'
import Item from './Item'

const ItemList = ({ todos, onToggle, onDelete }) => {
  return (
    <Fragment>
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
    </Fragment>
  );
}


export default ItemList;
