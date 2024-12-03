import Calbutton from "./component/Calbutton";
import Display from "./component/Display";
import "./App.css";
import css from "./App.module.css";
function App() {
  return (
    <div className={css.calculator}>
      <Display></Display>
      <Calbutton></Calbutton>
    </div>
  );
}

export default App;
