import css from "./Item.module.css";

const Item = ({ foodItem, bought, handleronClick }) => {
  return (
    <li className={`${css[`kg-items`]} list-group-item ${bought && "active"}`}>
      <span className={css["kg-span"]}>{foodItem}</span>
      <button
        className={`${css.button} btn btn-success`}
        onClick={handleronClick}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
