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

  //待合併的鉤子
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false)
  //待合併的鉤子

  
  const [inputValue, setInputValue] = useState({
    email: '',
    nickName: '',
    password: '',
    checkPassword: ''
  })
  
  const emailRegexr = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g

  const handleChange = (e) => {
    const {name, value} = e.target
    const tempInputValue = {...inputValue, [name]: value}
    setInputValue(tempInputValue)
    console.log(!(inputValue['password'] == inputValue['checkPassword']))
  }

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
              {!inputValue['email'].match(emailRegexr) && <span className='ml-3 text-sm text-red-600'>電子郵件格式錯誤</span>}
              </p>
              <input
                type="email"
                name="email"
                value={inputValue['email']}
                onChange={(e) => {
                  handleChange(e)
                }}
                className="w-full border-b-2 border-black"
              />
            </li>
            <li className="mb-12">
              <p className="text-lg">NICKNAME
               {inputValue['nickName'].length == 0 && <span className="ml-3 text-sm text-red-600">不得為空</span>}
              </p>
              <input
                type="text"
                name="nickName"
                value={inputValue['nickName']}
                onChange={(e) => {
                  handleChange(e)
                }}
                className="w-full border-b-2 border-black"
              />
            </li>
            <li className="mb-12">
              <p className="text-lg">
                PASSWORD
                {inputValue['password'].length <= 5 && <span className="ml-3 text-sm text-red-600">至少六個字</span>}
              </p>
              <input
                type="password"
                name="password"
                value={inputValue['password']}
                onChange={(e) => handleChange(e)}
                className="w-full border-b-2 border-black"
              />
            </li>
            <li className="mb-20">
              <p className="text-lg">Confirm the PASSWORD
              {!(inputValue['password'] == inputValue['checkPassword']) && <span className="ml-3 text-sm text-red-600">密碼不相同</span>}
              </p>
              <input
                type="password"
                name="checkPassword"
                value={inputValue['checkPassword']}
                onChange={(e) => handleChange(e)}
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
