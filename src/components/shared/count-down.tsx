import React, { HTMLAttributes } from "react";

import { useState } from "react";
import { useEffect } from "react";

export const CountDown: React.FC<HTMLAttributes<any>> = () => {
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    setInterval(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return <div>Time left : {counter} </div>;
};
