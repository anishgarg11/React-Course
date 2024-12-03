import AppName from "./components/AppName";
import AppTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItems2 from "./components/TodoItems2";
import "./App.css";

function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AppTodo></AppTodo>
      <div class="items-container">
        <TodoItem1></TodoItem1>
        <TodoItems2></TodoItems2>
      </div>
    </center>
  );
}

export default App;
