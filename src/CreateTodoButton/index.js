import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';

function CreateTodoButton(props) {

  const {openModal, setOpenModal} = React.useContext(TodoContext);

  const onClickButton = () => {
    setOpenModal(!openModal);
  }

  return (
    <button className='CreateTodoButton'
    onClick={onClickButton}>
    +
    </button>
  )
}

export {CreateTodoButton}