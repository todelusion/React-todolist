import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import VisiterTodolist from "./VisiterTodolist";
import Regist from "./Regist"

export default function App() {
  const baseUrl = "https://todoo.5xcamp.us"
  return (
    <>
      <Routes>
        <Route path="/" element={<Home baseUrl={baseUrl} />}></Route>
        <Route path="/visiterTodolist" element={<VisiterTodolist />}></Route>
        <Route path="/regist" element={<Regist baseUrl={baseUrl}/>}></Route>
      </Routes>
    </>
  );
}
