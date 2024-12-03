import css from "./Calbutton.module.css";

const Calbutton = ({onButtonClick}) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    "%",
    "=",
    ".",
  ];
  return (
    <div className={css.buttonsContainer}>
      {buttonNames.map((buttonNames) => (
        <button className={css.calbutton} onClick={onButtonClick}>{buttonNames}</button>
      ))}
    </div>
  );
};

export default Calbutton;
