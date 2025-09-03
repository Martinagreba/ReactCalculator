export default function Button({ onButtonClick }) {
  const buttons = [
    "+",
    "-",
    "*",
    "/",
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "0",
    ".",
    "C",
    "=",
  ];
  return (
    <div className="calculator__button-panel">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => onButtonClick(btn)}
          className={`calculator__button ${
            btn === "="
              ? "calculator__button--equal"
              : btn === "C"
              ? "calculator__button--clear"
              : ""
          }`}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}
