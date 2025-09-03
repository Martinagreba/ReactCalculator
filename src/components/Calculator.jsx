import { useState } from "react";
import Display from "./Display.jsx";
import Button from "./Button.jsx";

export default function Calculator() {
  const [value, setValue] = useState("");

  function handleButtonClick(btn) {
    if (btn === "=") {
      try {
        setValue(eval(value));
      } catch {
        setValue("Error");
      }
    } else if (btn === "C") {
      setValue("");
    } else {
      setValue(value + btn);
    }
  }
  return (
    <div className="calculator">
      <Display value={value} />
      <Button onButtonClick={handleButtonClick} />
    </div>
  );
}
