import React, { useState, useEffect } from "react";

const Timer = () => {
  const { count, setcount } = useState(0);
  const time = () => {
    setcount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(time, 1000);
    return () => {
      clearInterval(interval);
      console.log("cleared");
    };
  }, []);

  return <div>{count}</div>;
};

export default Timer;
