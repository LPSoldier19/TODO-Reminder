import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm(){

    const [newTodoValue, setNewTodoValue] = React.useState('');
    const [newTodoDateValue, setNewTodoDateValue] = React.useState('');
    const {openModal, setOpenModal} = React.useContext(TodoContext);

    const {
        addTodo,
    } = React.useContext(TodoContext)

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
        
    }

    const onChangeDate = (event) =>{
        setNewTodoDateValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue, newTodoDateValue);
        setOpenModal(false);
    }


    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla para el almuerzo"
            />
            <input type="date" 
            value={newTodoDateValue}
            onChange={onChangeDate}
            className="TodoForm-dateInput"
            />
            <div className="TodoForm-buttonContainer">
                <button
                type="button"
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                type="submit"
                className="TodoForm-button TodoForm-button--add"
                >
                    Agregar
                </button>
            </div>
        </form>
    );
}

export {TodoForm};