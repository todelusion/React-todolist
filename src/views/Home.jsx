import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Layout_Hscreen from "../Layout/Layout_Hscreen";
import Body_RectangleWrap from "../components/Body_RectangleWrap";
import List_Input from "../components/List_Input";
import LoadingModal from "../components/LoadingModal";
import ErrorModal from "../components/ErrorModal";

import useLoading from "../hooks/useLoading";
import useInputChange from "../hooks/useInputChange";

import Nav from "./Nav";
// sdfcvdf@gmail.com
// sdfcvdf

export default function Home({ baseUrl }) {
  const emailRegexr =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;

  
  const [inputValue, setInputValue] = useInputChange({
    email: "",
    password: "",
  })

  const [isLoading, setIsLoading] = useLoading({
    isPending: false,
    isError: false,
    isSuccess: false,
  })

  const handleSubmit = async () => {
    const obj = {
      user: {
        email: inputValue["email"],
        password: inputValue["password"],
      },
    };
    setIsLoading('isPending', true)
    try {
      const res = await axios.post(`${baseUrl}/users/sign_in`, obj);
      console.log(res)
      setIsLoading('isPending', false)
      // navigate("/", { replace: true });
    } catch (err) {
      setIsLoading('isPending', false)
      setIsLoading('isError', true)
      setTimeout(() => setIsLoading('isError', false) ,1000);
    }
  };

  return (
    <>
      <Nav isLoading={isLoading['isPending']} />
      <Layout_Hscreen>
        <Body_RectangleWrap bodyTitle="Login">
          <ul className="login-regist-wrapper font-light">
            <List_Input
              tilte="EMAIL"
              inputName="email"
              inputType="email"
              inputValue={inputValue}
              setInputValue={setInputValue}
              className_li="mb-20"
              className_p="text-2xl"
            >
              {!inputValue["email"].match(emailRegexr) && (
                <span className="errorMessage">
                  電子郵件格式錯誤
                </span>
              )}
            </List_Input>
            <List_Input
              tilte="PASSWORD"
              inputName="password"
              inputType="text"
              inputValue={inputValue}
              setInputValue={setInputValue}
              className_li="mb-20"
              className_p="text-2xl"
            >
              {inputValue["password"].length == 0 && (
                <span className="errorMessage">不得為空</span>
              )}
            </List_Input>
            <li className="text-xl">
              <Link to="/visiterTodolist">
                <p className="inline-block underline underline-offset-1">
                  訪客登入
                </p>
              </Link>
              <span className="mx-5 inline-block h-4 border-l border-black"></span>
              <p
                onClick={handleSubmit}
                className="mb-20 inline-block cursor-pointer underline underline-offset-1"
              >
                登入
              </p>
              <Link to="/regist">
                <p className="block text-base text-primary underline">註冊</p>
              </Link>
            </li>
          </ul>
        </Body_RectangleWrap>
      </Layout_Hscreen>
      <div className={`${isLoading["isPending"] ? "show" : "close"}`}>
        <LoadingModal modalMessage="處理中" />
      </div>
      <div className={`${isLoading["isError"] ? "show" : "close"}`}>
        <ErrorModal modalMessage="登入失敗" />
      </div>
    </>
  );
}
