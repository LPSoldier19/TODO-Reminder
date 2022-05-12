import React from "react";
import {TodoCounter} from "../TodoCounter";
import {TodoSearch} from '../TodoSearch';
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext"



function AppUI(){
    return(
    <React.Fragment>
        
        <TodoCounter/>

        <TodoSearch/>

        <TodoContext.Consumer>
          {({error, 
          loading, 
          searchedTodos, 
          completeTodos, 
          deleteTodo})=>(
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
          )}
        </TodoContext.Consumer>

        <CreateTodoButton />
    </React.Fragment>
    );
}

export {AppUI};