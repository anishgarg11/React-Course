import css from "./Display.module.css";
const Display = ({ displayVal }) => {
  return (
    <input className={css.display} type="text" value={displayVal} readOnly />
  );
};

export default Display;
