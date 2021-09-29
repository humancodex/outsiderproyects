import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList }  from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
// import './App.css';

const todos = [
  { text: 'CALM', completed: true },
  { text: 'OPENNESS', completed: false },
  { text: 'MOVEMENT', completed: false },
  { text: 'FUN STUFF', completed: false },
  { text: 'YOUR PASSION', completed: false },

];

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
