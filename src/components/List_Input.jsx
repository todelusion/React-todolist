import React from "react";

export default function List_Input({
  tilte,
  inputName,
  inputType,
  inputValue,
  setInputValue,
  children,
  className_li,
  className_p,
}) {
  return (
    <li className={className_li}>
      <p className={className_p}>
        {tilte}
        {children}
      </p>
      <input
        value={{ inputValue }[{ inputName }]}
        name={inputName}
        onChange={(e) => setInputValue(e)}
        type={inputType}
        className="w-full border-b-2 border-black"
      />
    </li>
  );
}
