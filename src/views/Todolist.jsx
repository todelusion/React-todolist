import React from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

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
      <div className="flex flex-col items-center w-full">
        <div className="mb-16 px-16 py-10  RectangleContainer hover-RectangleContainer RectangleSelf hover-RectangleSelf">
          <input type="text"  className="py-1 px-1 border-2 border-black rounded-md w-full outline-none"/>
        </div>
        <div className="px-16 py-7 RectangleContainer hover-RectangleContainer RectangleSelf hover-RectangleSelf">
          <ul>
            <li className="flex items-center justify-between">
              <div className="flex items-center">
                <div className='border-2 border-black w-6 h-6'></div>
                <p className="ml-7 cursor-pointer hover:line-through">提醒我買USB線</p>
              </div>
              <FontAwesomeIcon icon={faX} className="i-faX" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todolist;
