import React from "react";

const CountClick = ({ name, count }) => {
  console.log(`display ${name}`);
  return <div>{count}</div>;
};

export default CountClick;
