import css from "./Item.module.css";

const Item = ({ foodItem }) => {
  const handleronclick = (event) => {
    console.log(event);
    console.log(`${foodItem} being bought`);
  };

  return (
    <li className={`${css["kg-item"]} list-group-item`}>
      <span className={css["kg-span"]}>{foodItem}</span>
      <button
        type="button"
        className={`${css.button} btn btn-success`}
        onClick={(event) => handleronclick(event)}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
