import React from 'react'

export default function List_Input({tilte, inputName, inputType, onHandleChange, inputValue, children}) {
  return (
    <li className="mb-20">
        <p className="text-2xl">
          {tilte}
          {children}
        </p>
        <input
        value={{inputValue}[{inputName}]}
        name={inputName}
        onChange={(e) => onHandleChange(e)}
        type={inputType}
        className="w-full border-b-2 border-black"
        />
    </li>
  )
}
