import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "../components/Nav";
import Home from "./Home";
import VisiterTodolist from "./VisiterTodolist";

export default function App(){
    
    return(
        <>
        <Nav />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/visiterTodolist" element={<VisiterTodolist />}></Route>
        </Routes>
        </>
    )
}