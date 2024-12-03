import css from "./Calbutton.module.css";

const Calbutton = () => {
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
        <button class={css.calbutton}>{buttonNames}</button>
      ))}
    </div>
  );
};

export default Calbutton;
