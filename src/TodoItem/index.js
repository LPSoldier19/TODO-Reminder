import React from 'react';
import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons';

function TodoItem(props) {

  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={props.onComplete}>
        <FontAwesomeIcon icon={faCheck}/>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}<br></br>
        Date: {props.date}
      </p>
      <span className="Icon Icon-delete"
      onClick={props.onDelete}>
        <FontAwesomeIcon icon={faClose}/>
      </span>
    </li>
  );
}

export { TodoItem };