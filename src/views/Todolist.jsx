import React, { useState } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

function Todolist() {
  const [events, setEvents] = useState([
    {id:1, content: '烘衣服', completed_at: null},
    {id:2, content: '洗衣服', completed_at: null},
    {id:3, content: '洗碗', completed_at: null},
  ])
  
  const [input, setInput] = useState('')

  const setTempEvent = () => {
    if(input == ''){
      alert('欄位不得為空')
    }else{
      const newEvents = [...events, {
        id: 1,
        content: input,
        completed_at: null
      }]
      return newEvents
    }
  }

  const handleEvent = (e) => {
    if(e.code == 'Enter'){
      setEvents(setTempEvent())
      setInput('')
      console.log(events)
    }
    console.log(e.type)
  }

  return (
    <>
      <div className='absolute top-0 left-0 right-0'>
        <h1 className="-z-10 mb-28 hidden whitespace-nowrap font-dela text-5xl md:flex">
          A React Based To
          <span className="OvalContainer OvalSelf"></span>
          Do
        </h1>
        <h1 className="-z-10 mb-10 w-max justify-between font-dela text-5xl md:text-8xl md:hidden">
          A React
          <span className="m-OvalContainer m-OvalSelf">Based</span>
          To Do
        </h1>
      </div>
      <nav className='absolute top-1/2 left-5'>
        <button className='border-2 border-black px-10 py-5 hover:bg-second'>Click to change</button>
      </nav>
      
      <div className="flex flex-col items-center w-full mt-32">
        <div className="flex items-center mb-16 pl-10 pr-7 py-5  RectangleContainer hover-RectangleContainer RectangleSelf hover-RectangleSelf">
          <input value={input} onKeyUp={handleEvent} onChange={(e) => setInput(e.target.value)} placeholder='請輸入待辦' type="text" className="py-1 px-1  border-b-2 border-b-black w-full outline-none" />
          <button onClick={handleEvent} className='ml-7 border-2 border-black px-24 py-3 rounded-[100%] outline-none hover:bg-second hover:scale-105 duration-100'>ADD</button>
        </div>
        <div className="px-16 py-10 RectangleContainer hover-RectangleContainer RectangleSelf hover-RectangleSelf">
          <ul>
            {true && (events.map((event, index) => {
              return(
              <li key={index} className="flex items-center justify-between py-5">
                <div className="flex items-center">
                  <div className='border-2 border-black w-6 h-6'></div>
                  <p className="ml-7 cursor-pointer hover:line-through">
                    {event.content}
                  </p>
                </div>
                <FontAwesomeIcon icon={faX} className="i-faX" />
              </li>
              )
            }))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Todolist;
