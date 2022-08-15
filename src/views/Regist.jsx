import React from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Body_RectangleWrap from "../components/Body_RectangleWrap";
import Nav from "./Nav";
import Layout_Hscreen from "../Layout/Layout_Hscreen";
import LoadingModal from "../components/LoadingModal";
import ErrorModal from "../components/ErrorModal";


export default function Regist({ baseUrl }) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({})


  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const handleChange = (e) => {
    const tempInputValue = inputValue
    console.log(tempInputValue)
    tempInputValue['email'] = e.target.value
    tempInputValue['password'] = e.target.value
  }


  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false)

  const [registStatus, setRegistStatus] = useState({})
  
  const emailRegexr = '/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
  const handleRegist = async () => {
    const obj = {
      user: {
        email: inputValue['email'],
        nickname: inputValue['nickName'],
        password: inputValue['password'],
      },
    };
    console.log(obj)

    // setIsPending(true);
    // try {
    //   const res = await axios.post(`${baseUrl}/users`, obj);
    //   console.log(res);
    //   navigate("/", { replace: true });
    // }catch (err){
    //     setIsPending(false)
    //     setIsError(true);
    //     setTimeout(() => setIsError(false), 1000)
    // }
  

  };
  // const handleRegistStatus = () => {
  //   let tempRegistStatus = {}
  //   email.match({emailRegexr}) ? tempRegistStatus['emailError'] = false : tempRegistStatus['emailError'] = true
  //   nickName.length > 4 ? tempRegistStatus['nickNameError'] = false : tempRegistStatus['nickNameError'] = true
  //   setRegistStatus(tempRegistStatus)
  //   console.log(registStatus['nickNameError'])
  // }

  return (
    <>
      <Nav />
      <Layout_Hscreen>
        <Body_RectangleWrap bodyTitle="Regist">
          <ul className="pt-12 pl-20 pr-14 pb-14 font-light md:pl-16 md:pt-20 md:pr-64">
            <li className="mb-12">
              <p className="text-lg">EMAIL
              {false && <span className="ml-3 text-sm text-red-600">電子郵件格式錯誤</span>}
              </p>
              <input
                type="email"
                value={inputValue['email']}
                onChange={(e) => {
                  handleChange(e.target.value)
                }}
                className="w-full border-b-2 border-black"
              />
            </li>
            <li className="mb-12">
              <p className="text-lg">NICKNAME
               {false && <span className="ml-3 text-sm text-red-600">至少五個字</span>}
              </p>
              <input
                type="text"
                value={inputValue['nickName']}
                onChange={(e) => {
                  handleChange(e.target.value)
                }}
                className="w-full border-b-2 border-black"
              />
            </li>
            <li className="mb-12">
              <p className="text-lg">PASSWORD</p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b-2 border-black"
              />
            </li>
            <li className="mb-20">
              <p className="text-lg">Confirm the PASSWORD</p>
              <input
                type="password"
                value={checkPassword}
                onChange={(e) => setCheckPassword(e.target.value)}
                className="w-full border-b-2 border-black"
              />
            </li>
            <li className="flex items-end justify-between text-xl">
              <Link to="/">
                <p className="text-base underline">返回</p>
              </Link>
              <p
                onClick={handleRegist}
                className="cursor-pointer underline underline-offset-1"
              >
                下一步
              </p>
            </li>
          </ul>
        </Body_RectangleWrap>
      </Layout_Hscreen>
      <div className={`${isPending ? "show" : "close"}`}>
        <LoadingModal modalMessage="處理中" />
      </div>
      <div className={`${isError ? "show" : "close"}`}>
        <ErrorModal modalMessage="註冊失敗" />
      </div>
    </>
  );
}
