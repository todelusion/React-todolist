import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="fixed top-0 right-0 left-0 z-20 flex items-center justify-between bg-black/50">
      <h1 className="font-dela text-4xl">LOGO</h1>
      <ul className="flex">
        <li className="px-5">
          <Link to="/">Home</Link>
        </li>
        <li className="px-5">
          <Link to="/visiterTodolist">visiterTodoList</Link>
        </li>
        <li className="px-5">About</li>
      </ul>
    </div>
  );
}
