import React from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

function Todolist() {
  return (
    <div>
      <nav>
        <h1 className="-z-10 mb-14 hidden whitespace-nowrap font-dela text-6xl md:flex">
          A React Based To
          <span className="OvalContainer OvalSelf"></span>
          Do
        </h1>
        <h1 className="-z-10 mb-10 w-max justify-between font-dela text-5xl md:hidden">
          A React
          <span className="m-OvalContainer m-OvalSelf">Based</span>
          To Do
        </h1>
      </nav>
      <div className="flex w-full justify-center">
        <div className="RectangleContainer hover-RectangleContainer RectangleSelf hover-RectangleSelf"></div>
      </div>
    </div>
  );
}

export default Todolist;
