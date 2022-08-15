import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import LoadingModal from "../components/LoadingModal";
import Nav from "./Nav";

const baseUrl = "https://fathomless-brushlands-42339.herokuapp.com/todo8";

function VisiterTodolist() {
  const [events, setEvents] = useState([]);
  // const [key, setKey] = useState(1);
  const [switchOptions, setSwitchOptions] = useState("");
  const [input, setInput] = useState("");
  const [isPending, setIsPending] = useState(false);

  const fetchData = async () => {
    const res = await axios.get(baseUrl);
    console.log(res);
    setEvents(res.data);
    setIsPending(false);
  };

  //每當useEffect依賴項變動，就再重複執行一次useEffect，這裡用key值表示
  //不過由於fetchData變數函式被直接拆到外層scope宣告，所以直接在任何地方呼叫fetchData即可
  useEffect(
    () => {
      fetchData();
    },
    /*[key]*/ []
  );

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const setTempEvent = () => {
    if (input == "") {
      return;
    } else {
      const obj = {
        content: input,
        completed_at: "inProgrees",
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
        fetchData();
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
    const completed_at =
      events[index].completed_at === "inProgrees" ? "isDone" : "inProgrees";

    const obj = {
      completed_at: completed_at,
    };
    setIsPending(true);
    const res = await axios.patch(`${baseUrl}/${events[index].id}`, obj);
    fetchData();
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

  const todosCount = () => {
    const inProgreesCounts = events.filter(
      (event) => event.completed_at === "inProgrees"
    ).length;
    return inProgreesCounts;
  };

  //switch panel
  const showTodo = (index) => {
    if (switchOptions === "inProgrees" || switchOptions === "isDone") {
      return events[index].completed_at === switchOptions ? "block" : "hidden";
    } else {
      return true;
    }
  };

  const switchToAll = () => {
    setSwitchOptions("");
  };
  const switchToInProgress = () => {
    setSwitchOptions("inProgrees");
  };
  const switchToIsdone = () => {
    setSwitchOptions("isDone");
  };

  return (
    <>
      <Nav isPending={isPending} />
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
          <div className="h-20 w-20 p-1 md:w-40 md:p-0">
            <button
              onClick={clearAll}
              className="btn-RectangleContainer btn-hover-RectangleContainer btn-RectangleSelf btn-hover-RectangleSelf h-full p-3 text-xs tracking-widest md:text-base"
            >
              Clear All
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
                    className={`flex items-center justify-between py-5 ${showTodo(
                      index
                    )}`}
                  >
                    <div className="flex items-center">
                      {/*
                      直接發api patch請求修改completed_at，並重發api（重設key值）以便重新渲染頁面
                      */}
                      {event.completed_at === "isDone" && (
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="h-5 w-5 text-primary"
                        />
                      )}
                      {event.completed_at === "inProgrees" && (
                        <div className="border-2 border-black p-2"></div>
                      )}
                      <p
                        onClick={() => handleStatus(index)}
                        className={`ml-7 block cursor-pointer break-all hover:line-through ${
                          event.completed_at === "isDone"
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
      <div className={`${isPending === true ? "show" : "close"}`}>
        <LoadingModal modalMessage="讀取中" />
      </div>
    </>
  );
}

export default VisiterTodolist;
