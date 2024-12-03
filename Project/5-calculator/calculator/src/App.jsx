import Calbutton from "./component/Calbutton";
import { useState } from "react";
import Display from "./component/Display";
import css from "./App.module.css";
function App() {
  let { calVal, setCalVal } = useState("78");

  return (
    <div className={css.calculator}>
      <Display displayVal={calVal}></Display>
      <Calbutton
        onButtonCLick={() => console.log("Button Clicked")}
      ></Calbutton>
    </div>
  );
}

export default App;
