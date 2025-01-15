import { useState } from "react";
import s from "./Counter.module.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleMinusClick = () => {
    if (counter < 1) {
      return alert("No, you can`t clicked more");
    }
    setCounter((counter) => counter - 1);
  };
  const handleResetClick = () => {
    setCounter(0);
  };
  const handlePlusClick = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>{counter}</h2>
      <div className={s.buttons}>
        <button onClick={handleMinusClick} className={s.minus}>
          Minus
        </button>
        <button onClick={handleResetClick} className={s.reset}>
          Reset
        </button>
        <button onClick={handlePlusClick} className={s.plus}>
          Plus
        </button>
      </div>
    </div>
  );
};

export default Counter;
