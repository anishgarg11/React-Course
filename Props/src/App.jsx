import FoodItems from "./Components/FoodItems";
import ErrorMsg from "./Components/ErrorMsg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItem] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItem(newItems);
      console.log("Food Value entered is " + newFoodItem);
    }
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">My Favourite Foods</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMsg item={foodItems}></ErrorMsg>
        <FoodItems item={foodItems} />
      </Container>

     
    </>
  );
}

export default App;
