import css from "./FoodInput.module.css";

const FoodInput = () => {
  const handleonChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={css.foodInput}
      onChange={handleonChange}
    />
  );
};

export default FoodInput;
