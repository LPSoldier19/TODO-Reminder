import React from "react";
import {TodoCounter} from "../TodoCounter";
import {TodoSearch} from '../TodoSearch';
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import {TodosError} from '../TodosError';
import {EmptyTodos} from '../EmptyTodos';
import {TodosLoading} from '../TodosLoading';


function AppUI(){
  const {error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodo,
    openModal,
    setOpenModal} = React.useContext(TodoContext);
  return(
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
          <TodoList>
            {loading && <TodosLoading/>}
            {error && <TodosError error={error}/>}
            {(!loading && searchedTodos.length <= 0) && <EmptyTodos/>}
            {searchedTodos.map(todo => (
              <TodoItem key={todo.text}
              text={todo.text}
              completed={todo.completed}
              date={todo.date}
              onComplete={() => completeTodos(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>

          {!!openModal && (
            <Modal>
              <TodoForm/>
            </Modal>
          )}

      <CreateTodoButton
        setOpenModal = {setOpenModal}
      />
    </React.Fragment>
  );
}

export {AppUI};