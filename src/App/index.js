
import React from "react";
import { AppUI } from "./AppUI";
import {TodoProvider} from '../TodoContext'
// import './App.css';

// const defaultTodos = [
//   {
//     text: 'Cortar cebolla',
//     completed: false
//   },
//   {
//     text: 'Tomar curso de intro a React',
//     completed: false
//   },
//   {
//     text: 'Llorar con la Llorona',
//     completed: true
//   },
//   {
//     text: 'Conseguir lugar para hacer la practica',
//     completed: false
//   },
// ];


function App(props) {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
