import React from "react";
import {TodoCounter} from "../TodoCounter";
import {TodoSearch} from '../TodoSearch';
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI({totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodos,
    deleteTodo,
    loading,
    error}){
    return(
    <React.Fragment>
        <TodoCounter
          total={totalTodos}
          completed={completedTodos}
        />

        <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}/>

        <TodoList>
          {loading && <p>Estamos cargando, no desesperes...</p>}
          {error && <p>Desesperate, hubo un error</p>}
          {(!loading && searchedTodos.length <= 0) && <p>Crea tu primer TODO!</p>}

          {searchedTodos.map(todo => (
            <TodoItem key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>

        <CreateTodoButton />
    </React.Fragment>
    );
}

export {AppUI};