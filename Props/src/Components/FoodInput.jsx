import css from "./FoodInput.module.css";
const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      className={css.foodInput}
      type="text"
      placeholder="Enter Food Items Here"
      onKeyDown={handleKeyDown}
    />
  );
};

export default FoodInput;
