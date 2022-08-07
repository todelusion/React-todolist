import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import LoadingModal from '../components/LoadingModal'

const baseUrl = 'https://fathomless-brushlands-42339.herokuapp.com/todo8'

function VisiterTodolist() {
  const [events, setEvents] = useState([])
  const [key, setKey] = useState(1)
  const [input, setInput] = useState('')
  const [isPending, setIsPending] = useState(false)
  

  useEffect(() => {
    const fetchData = async() => {
      const res = await axios.get(baseUrl)
      console.log(res)
      setEvents(res.data)
      setIsPending(false)
    }
    fetchData()
    
  }, [key])
  

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const setTempEvent = () => {
    if(input == ''){
      return
    }else{
      const obj = {
        content: input,
        completed_at: null
      }
      return obj
    }
  }

  const handleEvent = async(e) => {
    if(e.code == 'Enter' || e.type == 'click'){
      if(setTempEvent()){
        setIsPending(true)
        setInput('')
        const res = await axios.post(`${baseUrl}`, setTempEvent())
        setKey(key+1)
        
      }else {
        alert('欄位不得為空')
      }
    }
  }
  const handleDelete = (index) => {
    setEvents(events.filter((event, eventIndex) => {
      return index !== eventIndex
    }))
  }

  const clearAll = () => {
    events.forEach((event, index) => {
      axios.delete(`${baseUrl}/${event.id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    })
    setEvents(events.filter(event => false))
  }
  
  
  return (
    <>
      <div className='absolute top-0 left-0 right-0'>
        <h1 className="-z-10 mb-10 w-max justify-between font-dela text-5xl md:text-6xl">
          A React
          <div className={`${isPending === true ? 'show': 'close'}`}>
            <span className="block"></span>
          </div>
          <div className={`${!isPending === true ? 'show': 'close'}`}>
            <span className="m-OvalContainer m-OvalSelf duration-150"></span>
          </div>
          Based
          <br />
          To Do
        </h1>
      </div>
     
      <section className="mx-auto flex flex-col items-center mt-32 container">
        <div className="flex items-center mb-10 pl-10 pr-7 py-5  RectangleContainer hover-RectangleContainer RectangleSelf hover-RectangleSelf">
          <input value={input} onKeyUp={handleEvent} onChange={handleInput} placeholder='請輸入待辦' type="text" className="py-1 px-1  border-b-2 border-b-black w-full outline-none" />
          <button onClick={handleEvent} className='ml-7 border-2 border-black px-14 py-3 rounded-[100%] outline-none hover:bg-primary hover:text-white hover:scale-105 duration-100'>ADD</button>
        </div>
        <div className='w-full flex justify-start mb-10'>
          <div className='w-40 h-20'>
            <button onClick={clearAll} className='RectangleContainer hover-RectangleContainer RectangleSelf hover-RectangleSelf h-full'>Clear All</button>
          </div>
        </div>
        <div className="px-16 py-10 RectangleContainer hover-RectangleContainer RectangleSelf hover-RectangleSelf">
          <ul>
            {true && (events.map((event, index) => {
              return(
              <li key={event.id} className="flex items-center justify-between py-5">
                <div className="flex items-center">
                  <div className='border-2 border-black w-6 h-6'></div>
                  <p className="ml-7 cursor-pointer hover:line-through">
                    {event.content}
                  </p>
                </div>
                <FontAwesomeIcon onClick={() => handleDelete(index)} icon={faX} className="i-faX" />
              </li>
              )
            }))}
          </ul>
        </div>
      </section>
      <div className={`${isPending === true ? 'show': 'close'}`}>
        <LoadingModal />
      </div>
    </>
  );
}

export default VisiterTodolist;
