import React, { Component } from 'react'
import styled from "styled-components"
import colors from './colors'

const ItemContainer = styled.div`
  padding: 20px;
  display: flex;
  border-radius: ${colors.radius};
  transition: all 0.2s;
  user-select: none;
  border-bottom: 1px dashed rgba(51,51,51,0.1);
  &:hover{
    background-color: ${colors.main};
    color: ${colors.white};
  }

  .delete-button {
    top: 0;
    opacity: 0;
    font-weight: 600;
    font-size: 18px;
    color: ${colors.white};
    flex: 1;
    margin-right: 10px;
  }

&:hover .delete-button {
    opacity: 1;
    cursor: pointer;
}

  .item {
   display: flex;
  }

  .text {
    margin-right: 10px;

    &:hover {
      opacity: 1;
      cursor: pointer;
  }
  }

  .isChecked {
    text-decoration: line-through;
    opacity: 0.3;
  }

  .check-mark {
    line-height: 1rem;
    color: ${colors.main};
    font-weight: 800;
  }
`

class Item extends Component {

  shouldComponentUpdate(nextProps) {
    return this.props.isChecked !== nextProps.isChecked;
  }

  render() {
    const { text, isChecked, id, onToggle, onDelete } = this.props;

    return (
      <ItemContainer>
        <div className="item"
          onClick={() => onToggle(id)}>
          <div className="delete-button"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(id)
            }}
          >
            &times;
            </div>
          <div className={`text ${isChecked && 'isChecked'}`}>
            <div>{text}</div>
          </div>
          {isChecked && (<div className="check-mark">√ Done!</div>)}
        </div>
      </ItemContainer>
    );
  }
}

export default Item;