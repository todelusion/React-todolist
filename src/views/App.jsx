import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import VisiterTodolist from "./VisiterTodolist";
import Regist from "./Regist"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/visiterTodolist" element={<VisiterTodolist />}></Route>
        <Route path="/regist" element={<Regist />}></Route>
      </Routes>
    </>
  );
}
