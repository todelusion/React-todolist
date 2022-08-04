import React from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

function Todolist(){
  
  return(
    <div>
      <h1 className="hidden -z-10 text-6xl font-dela whitespace-nowrap md:flex">
        A React Based To 
        <span className="OvalContainer OvalSelf"></span>
        Do
      </h1>
      <h1 className="-z-10 w-max text-5xl font-dela md:hidden justify-between">
        A React
      <span className="m-OvalContainer m-OvalSelf">Based</span>
        To Do
      </h1>
    </div>
  )
}

export default Todolist