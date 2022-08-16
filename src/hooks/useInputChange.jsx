import { useState } from "react";

export default function useInputChange(init){
  const [inputValue, setInputValue] = useState(init);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  return [ inputValue, handleChange ];
};
