import React, { useEffect, useState } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import LoadingModal from "../components/LoadingModal";

const baseUrl = "https://fathomless-brushlands-42339.herokuapp.com/todo8";

const eventStatusList = ["inProgrees", "isDone"];

function VisiterTodolist() {
  const [events, setEvents] = useState([]);
  const [key, setKey] = useState(1);
  const [input, setInput] = useState("");
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(baseUrl);
      console.log(res);
      setEvents(res.data);
      setIsPending(false);
    };
    fetchData();
  }, [key]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const setTempEvent = () => {
    if (input == "") {
      return;
    } else {
      const obj = {
        content: input,
        completed_at: false,
      };
      return obj;
    }
  };

  const handleEvent = async (e) => {
    if (e.code == "Enter" || e.type == "click") {
      if (setTempEvent()) {
        setIsPending(true);
        setInput("");
        const res = await axios.post(`${baseUrl}`, setTempEvent());
        setKey(key + 1);
      } else {
        alert("欄位不得為空");
      }
    }
  };
  const handleDelete = async (index) => {
    setIsPending(true);
    await axios.delete(`${baseUrl}/${events[index].id}`);
    setEvents(
      events.filter((event, eventIndex) => {
        return index !== eventIndex;
      })
    );
    setIsPending(false);
  };
  const handleStatus = async (index) => {
    const obj = {
      completed_at: !events[index].completed_at,
    };
    setIsPending(true);
    const res = await axios.patch(`${baseUrl}/${events[index].id}`, obj);
    setKey(key + 1);
  };

  const clearAll = () => {
    events.forEach((event, index) => {
      axios
        .delete(`${baseUrl}/${event.id}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    });
    setEvents(events.filter((event) => false));
  };

  return (
    <>
      <div className="absolute top-0 left-0 right-0">
        <h1 className="-z-10 mb-10 w-max justify-between font-dela text-5xl md:text-6xl">
          A React
          <div className={`${isPending === true ? "show" : "close"}`}>
            <span className="block"></span>
          </div>
          <div className={`${!isPending === true ? "show" : "close"}`}>
            <span className="m-OvalContainer m-OvalSelf duration-150"></span>
          </div>
          Based
          <br />
          To Do
        </h1>
      </div>

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
            className="ml-7 rounded-[100%] border-2 border-black px-14 py-3 outline-none duration-100 hover:scale-105 hover:bg-primary hover:text-white"
          >
            ADD
          </button>
        </div>
        <div className="mb-10 flex w-full justify-between">
          <div className="h-20 w-40">
            <button
              onClick={clearAll}
              className="RectangleContainer hover-RectangleContainer RectangleSelf hover-RectangleSelf h-full"
            >
              Clear All
            </button>
          </div>
          <div className="h-20 w-40">
            <button
              onClick={clearAll}
              className="RectangleContainer hover-RectangleContainer RectangleSelf hover-RectangleSelf h-full"
            >
              Clear All
            </button>
          </div>
          <div className="h-20 w-40">
            <button
              onClick={clearAll}
              className="RectangleContainer hover-RectangleContainer RectangleSelf hover-RectangleSelf h-full"
            >
              Clear All
            </button>
          </div>
        </div>
        <div className="RectangleContainer hover-RectangleContainer RectangleSelf hover-RectangleSelf px-16 py-10">
          <ul>
            {true &&
              events.map((event, index) => {
                return (
                  <li
                    key={event.id}
                    className="flex items-center justify-between py-5"
                  >
                    <div className="flex items-center">
                      {/*
                直接發api patch請求修改completed_at，並重發api（重設key值）以便重新渲染頁面
                */}
                      {event.completed_at && (
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="h-6 w-6 text-primary"
                        />
                      )}
                      {!event.completed_at && (
                        <div className="h-6 w-6 border-2 border-black"></div>
                      )}
                      <p
                        onClick={() => handleStatus(index)}
                        className={`ml-7 cursor-pointer hover:line-through ${
                          event.completed_at === true
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
        </div>
      </section>
      <div className={`${isPending === true ? "show" : "close"}`}>
        <LoadingModal />
      </div>
    </>
  );
}

export default VisiterTodolist;
