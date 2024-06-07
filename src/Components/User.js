import { useState } from "react";

const User = () => {
  const [count] = useState(0);
  const [count2] = useState(10);
  return (
    <>
      <h2>Name: Tanushi </h2>
      <h3>Location: Noida </h3>
      <h5>{count}</h5>
      <h5>{count2}</h5>
    </>
  );
};

export default User;
