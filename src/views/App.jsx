import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Regist from "./Regist";
import Todolist from "./Todolist";
import VisiterTodolist from "./VisiterTodolist";

export default function App() {
  const baseUrl = "https://todoo.5xcamp.us";
  return (
    <>
      <Routes>
        <Route path="/" element={<Home baseUrl={baseUrl} />}></Route>
        <Route path="/regist" element={<Regist baseUrl={baseUrl} />}></Route>
        <Route
          path="/todolist"
          element={<Todolist baseUrl={baseUrl} />}
        ></Route>
        <Route path="/visiterTodolist" element={<VisiterTodolist />}></Route>
      </Routes>
    </>
  );
}
