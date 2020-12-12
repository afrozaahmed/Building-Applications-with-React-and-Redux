import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function TodoForm({addTodo}){
  const [value,setValue] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return ;
    addTodo(value);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input input="text"
       className="input" 
       value={value} 
       onChange={e=>setValue(e.target.value)}
        placeholder="add todos..">

        </input>
    </form>
  )
}

function Todo({todo, index,completeTodo,removeTodo}){
  return (
    <div className="todo"  style={{textDecoration:todo.isCompleted?"line-through":""}}>
{todo.text}
<button onClick={()=>completeTodo(index)}>Complete</button>
<button onClick={()=>removeTodo(index)}>Remove</button>
    </div>
  )
}

function App() {

  const [todos, setTodos] = useState([
    {
      text: "Learn About React",
      isCompleted:false
    },
    {
      text: "Learn About React-Router",
      isCompleted:false
    },
    {
      text: "Learn About React-Redux",
      isCompleted:false
    }
  ])

  const addTodo = text => {
    const newTodo = [...todos, {text}];
    setTodos(newTodo);
  }

  const completeTodo = index => {
    const newTodo = [...todos];
    newTodo[index].isCompleted = true;
    setTodos(newTodo);
  }

const removeTodo = index =>{
  const newTodo = [...todos];
  newTodo.splice(index,1);
  setTodos(newTodo);
}

  return (
    <div className="app">
      <div className="todo-list">
{todos.map((todo,index) => (
  <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo}/>
))}
<TodoForm addTodo={addTodo}/>
      </div>
    </div>
  );
}

export default App;
