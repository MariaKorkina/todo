import { useState, useEffect } from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

function App() {

  // useEffect(() => {
  //  fetch('https://jsonplaceholder.typicode.com/posts')
  //  .then(response=>response.json)
  //  .then(json => 
  //    console.log(json))
  // }, []);
  const [todos, setTodo] = useState([]);

// функция для добавления задач
const addTask = (userInput) => {
  if (userInput) {
    const newItem = {
      id: Math.random().toString(36).substr(2,9),
      task: userInput,
      complete: false
    }
    setTodo([...todos, newItem])
  }
}

// функция для переключения задач
const toggleTask = (id) => {
  setTodo([...todos.map((todo)=>todo.id === id ? {...todo, complete: !todo.complete} : {...todo})])
}
// функция для удаления задач
const removeTask = (id) => {
  setTodo([...todos.filter((todo)=>todo.id !== id)])
}
  return (
    <div className="App">
      <header>
        <h1>To Do List: {todos.length}</h1> 
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo 
          todo={todo}
          key={todo.id} 
          handleToggle={toggleTask}
          removeTask={removeTask} />
        )
      })}
    </div>
  );
}

export default App;
