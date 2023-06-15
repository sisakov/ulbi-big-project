import React from "react";
import classes from "./Counter.module.scss";
export const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div className={classes.btn}>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
