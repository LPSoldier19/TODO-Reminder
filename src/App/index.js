
import React from "react";
import { AppUI } from "./AppUI";
// import './App.css';

const defaultTodos = [
  {
    text: 'Cortar cebolla',
    completed: false
  },
  {
    text: 'Tomar curso de intro a React',
    completed: false
  },
  {
    text: 'Llorar con la Llorona',
    completed: true
  },
  {
    text: 'Conseguir lugar para hacer la practica',
    completed: false
  },
];

function App(props) {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1){
    searchedTodos = todos;
  }
  else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodos = (text) => {

    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);

    //Otra opción es la siguiente:
    // todos[todoIndex].completed = {
    //   text: todos[todoIndex].text,
    //   completed: true
    // };
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodos={completeTodos}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
