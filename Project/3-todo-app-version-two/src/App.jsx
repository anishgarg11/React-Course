import AppName from "./components/AppName";
import AppTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
{
  name : "Buy Milk",
  dueDate : "4/10/2023"
},

{
  name : "Buy Milk",
  dueDate : "4/10/2023"
},

{
  name : "Like this Page",
  dueDate : "Right Now"
}
  ]
  return (
    <center className="todo-container">
      <AppName />
      <AppTodo></AppTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
      
    </center>
  );
}

export default App;
