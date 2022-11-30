import { useState } from "react";

const useBool = (initialState: boolean = false) => {
  const [bool, setBool] = useState(initialState);

  // * Set To True
  const setTrue = () => setBool(true);

  // * Set To False
  const setFalse = () => setBool(false);

  // * toggle bool
  const toggle = () => setBool((prevState) => !prevState);

  return { bool, setTrue, setFalse, toggle };
};

export default useBool;
