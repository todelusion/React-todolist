import React from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useLoading from "../hooks/useLoading";
import useInputChange from "../hooks/useInputChange";

import Nav from "./Nav";
import Layout_Hscreen from "../Layout/Layout_Hscreen";
import Body_RectangleWrap from "../components/Body_RectangleWrap";
import List_Input from "../components/List_Input";
import LoadingModal from "../components/LoadingModal";
import ErrorModal from "../components/ErrorModal";

export default function Regist({ baseUrl }) {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useInputChange({
    email: "",
    nickName: "",
    password: "",
    checkPassword: "",
  });
  const [isLoading, setIsLoading] = useLoading({
    isPending: false,
    isError: false,
    isSuccess: false,
  });

  const emailRegexr =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;

  const handleRegist = async () => {
    const obj = {
      user: {
        email: inputValue["email"],
        nickname: inputValue["nickName"],
        password: inputValue["password"],
      },
    };
    console.log(obj);

    setIsLoading("isPending", true);
    try {
      await axios.post(`${baseUrl}/users`, obj);
      navigate("/", { replace: true });
    } catch (err) {
      setIsLoading("isPending", false);
      setIsLoading("isError", true);
      setTimeout(() => setIsLoading("isError", false), 1000);
    }
  };

  return (
    <>
      <Nav isLoading={isLoading["isPending"]} />
      <Layout_Hscreen>
        <Body_RectangleWrap bodyTitle="Regist">
          <ul className="pt-12 pl-20 pr-14 pb-14 font-light md:pl-16 md:pt-20 md:pr-64">
            <List_Input
              tilte="EMAIL"
              inputName="email"
              inputType="email"
              inputValue={inputValue}
              setInputValue={setInputValue}
              className_li="mb-12"
              className_p="text-lg"
            >
              {!inputValue["email"].match(emailRegexr) && (
                <span className="errorMessage">電子郵件格式錯誤</span>
              )}
            </List_Input>

            <List_Input
              tilte="NICKNAME"
              inputName="nickName"
              inputType="text"
              inputValue={inputValue}
              setInputValue={setInputValue}
              className_li="mb-12"
              className_p="text-lg"
            >
              {inputValue["nickName"].length == 0 && (
                <span className="errorMessage">不得為空</span>
              )}
            </List_Input>
            <List_Input
              tilte="PASSWORD"
              inputName="password"
              inputType="password"
              inputValue={inputValue}
              setInputValue={setInputValue}
              className_li="mb-12"
              className_p="text-lg"
            >
              {inputValue["password"].length <= 5 && (
                <span className="errorMessage">至少六個字</span>
              )}
            </List_Input>
            <List_Input
              tilte="checkPASSWORD"
              inputName="checkPassword"
              inputType="password"
              inputValue={inputValue}
              setInputValue={setInputValue}
              className_li="mb-12"
              className_p="text-lg"
            >
              {!(inputValue["password"] == inputValue["checkPassword"]) && (
                <span className="errorMessage">密碼不相同</span>
              )}
            </List_Input>
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
      <div className={`${isLoading["isPending"] ? "show" : "close"}`}>
        <LoadingModal modalMessage="處理中" />
      </div>
      <div className={`${isLoading["isError"] ? "show" : "close"}`}>
        <ErrorModal modalMessage="註冊失敗" />
      </div>
      <div className={`${isLoading["isSuccess"] ? "show" : "close"}`}>
        <ErrorModal modalMessage="註冊成功" />
      </div>
    </>
  );
}
