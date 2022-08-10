import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import VisiterTodolist from "./VisiterTodolist";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/visiterTodolist" element={<VisiterTodolist />}></Route>
      </Routes>
    </>
  );
}
