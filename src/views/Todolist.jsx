import React, { useEffect, useState } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import LoadingModal from "../components/LoadingModal";
import Nav from "./Nav";

import useLoading from "../hooks/useLoading";



function Todolist({baseUrl}) {
  const [events, setEvents] = useState([]);
  const [switchOptions, setSwitchOptions] = useState(1);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useLoading({
    isPending: true
  });

  const axiosConfig = {
    headers: { Authorization: sessionStorage.getItem('token') }
  }
  useEffect(() => {fetchData()},[]);

  const fetchData = async () => {
    setIsLoading('isPending', true)
      const res = await axios.get(`${baseUrl}/todos`, axiosConfig);
      setIsLoading('isPending', false);
      if(res.data.todos.length === 0) return;
      setEvents(res.data.todos);
      
  };
 
  const handleInput = (e) => {  
    setInput(e.target.value);
  };

  const setTempEvent = () => {
    if (input == "") {
      return;
    } else {
      const obj = {
        content: input,
      };
      return obj;
    }
  };

  const handleEvent = async (e) => {
    if (e.code == "Enter" || e.type == "click") {
      if (setTempEvent()) {
        setIsLoading('isPending', true);
        setInput("");
        try{
          const res = await axios.post(`${baseUrl}/todos`, setTempEvent(), axiosConfig);
          console.log(res)
        }catch(err){
          console.log(err)
        }
        fetchData();
      } else {
        alert("欄位不得為空");
      }
    }
  };
  const handleDelete = async (index) => {
    setIsLoading('isPending', true);
    await axios.delete(`${baseUrl}/todos/${events[index].id}`, axiosConfig);
    setEvents(
      events.filter((event, eventIndex) => {
        return index !== eventIndex;
      })
    );
    setIsLoading('isPending', false);
  };
  const handleStatus = async (index) => {
    try {
      setIsLoading('isPending', true);
      console.log()
      const res = await axios.patch(`${baseUrl}/todos/${events[index].id}/toggle`, {}, axiosConfig);
      console.log(res)
      fetchData();
    }catch(err){
      console.log(err)
    }
  };

  const clearAll = () => {
    events.forEach((event) => {
      axios
        .delete(`${baseUrl}/todos/${event.id}`, axiosConfig)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    });
    setEvents(events.filter((event) => false));
  };

  const todosCount = () => {
    const inProgreesCounts = events.filter(
      (event) => typeof event.completed_at === "object"
    ).length;
    return inProgreesCounts;
  };

  //switch panel
  const showTodo = (event) => {
    if (typeof switchOptions === "object" || typeof switchOptions === "string") {
      return typeof event.completed_at === typeof switchOptions ? "block" : "hidden";
    }else{
      return true
    }
  };

  const switchToAll = () => {
    setSwitchOptions(1);
  };
  const switchToInProgress = () => {
    setSwitchOptions(null);
  };
  const switchToIsdone = () => {
    setSwitchOptions("string");
  };

  return (
    <>
      <Nav isLoading={isLoading['isPending']} />
      <section className="container mx-auto mb-20 mt-32 flex flex-col items-center">
        <div className="RectangleContainer hover-RectangleContainer RectangleSelf hover-RectangleSelf mb-10 flex  items-center py-5 pl-10 pr-7">
          <input
            value={input}
            onKeyUp={handleEvent}
            onChange={handleInput}
            placeholder="請輸入待辦"
            type="text"
            className="w-full border-b-2  border-b-black py-1 px-1 outline-none"
          />
          <button
            onClick={handleEvent}
            className="ml-7 rounded-[100%] border-2 border-black px-3 py-3 outline-none duration-100 hover:scale-105 hover:bg-primary hover:text-white md:px-14"
          >
            ADD
          </button>
        </div>
        <div className="mb-10 flex w-full justify-between">
          <div className="h-10 w-max p-1 md:w-40 md:p-0">
            <button
              onClick={clearAll}
              className="btn-RectangleContainer btn-hover-RectangleContainer btn-RectangleSelf btn-hover-RectangleSelf h-full p-3 text-xs tracking-widest md:text-base w-max"
            >
              <p className="leading-3">
              刪除全部
              </p>
            </button>
          </div>
          <div className="h-20 p-1 md:w-40 md:p-0">
            <button
              onClick={switchToAll}
              className="btn-RectangleContainer btn-hover-RectangleContainer btn-RectangleSelf btn-hover-RectangleSelf h-full p-3 text-xs tracking-widest md:text-base"
            >
              ALL
            </button>
          </div>
          <div className="h-20 p-1 md:w-40 md:p-0">
            <button
              onClick={switchToInProgress}
              className="btn-RectangleContainer btn-hover-RectangleContainer btn-RectangleSelf btn-hover-RectangleSelf h-full p-3 text-xs tracking-widest md:text-base"
            >
              inProgrees
            </button>
          </div>
          <div className="h-20 p-1 md:w-40 md:p-0">
            <button
              onClick={switchToIsdone}
              className="btn-RectangleContainer btn-hover-RectangleContainer btn-RectangleSelf btn-hover-RectangleSelf h-full p-3 text-xs tracking-widest md:text-base"
            >
              isDone
            </button>
          </div>
        </div>
        <div className="freeze-RectangleContainer freeze-RectangleSelf px-16 py-10">
          <ul className="mb-5">
            {true &&
              events.map((event, index) => {
                return (
                  <li
                    key={event.id}
                    // className={`flex items-center justify-between py-5`}
                    className={`flex items-center justify-between py-5 ${showTodo(event)}`}
                  >
                    <div className="flex items-center">
                      {typeof event.completed_at === "string" && (
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="h-5 w-5 text-primary"
                        />
                      )}
                      {typeof event.completed_at === "object" && (
                        <div className="border-2 border-black p-2"></div>
                      )}
                      <p
                        onClick={() => handleStatus(index)}
                        className={`ml-7 block cursor-pointer break-all hover:line-through ${
                          typeof event.completed_at === "string"
                            ? "completed_true"
                            : "completed_false"
                        }`}
                      >
                        {event.content}
                      </p>
                    </div>
                    <FontAwesomeIcon
                      onClick={() => handleDelete(index)}
                      icon={faX}
                      className="i-faX"
                    />
                  </li>
                );
              })}
          </ul>
          <p className="text-right">{todosCount()}個待完成項目</p>
        </div>
      </section>
      <div className={`${isLoading['isPending'] === true ? "show" : "close"}`}>
        <LoadingModal modalMessage="處理中" />
      </div>
    </>
  );
}

export default Todolist;
