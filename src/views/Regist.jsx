import React from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Nav from "./Nav";
import Layout_Hscreen from "../Layout/Layout_Hscreen";
import Body_RectangleWrap from "../components/Body_RectangleWrap";
import List_Input from "../components/List_Input";
import LoadingModal from "../components/LoadingModal";
import ErrorModal from "../components/ErrorModal";

export default function Regist({ baseUrl }) {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    nickName: "",
    password: "",
    checkPassword: "",
  });

  const [isPending, setIsPending] = useState({
    isPending: false,
    isError: false,
    isSuccess: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

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

    setIsPending((prevState) => {
      return { ...prevState, isPending: true };
    });
    try {
      await axios.post(`${baseUrl}/users`, obj);
      navigate("/", { replace: true });
    } catch (err) {
      setIsPending((prevState) => {
        return { ...prevState, isPending: false };
      });
      setIsPending((prevState) => {
        return { ...prevState, isError: true };
      });
      setTimeout(
        () =>
          setIsPending((prevState) => {
            return { ...prevState, isError: false };
          }),
        1000
      );
    }
  };

  return (
    <>
      <Nav />
      <Layout_Hscreen>
        <Body_RectangleWrap bodyTitle="Regist">
          <ul className="pt-12 pl-20 pr-14 pb-14 font-light md:pl-16 md:pt-20 md:pr-64">
            <List_Input
              tilte="EMAIL"
              inputName="email"
              inputType="email"
              onHandleChange={handleChange}
              inputValue={inputValue}
              className_li="mb-12"
              className_p="text-lg"
            >
              {!inputValue["email"].match(emailRegexr) && (
                <span className="ml-3 text-sm text-red-600">
                  電子郵件格式錯誤
                </span>
              )}
            </List_Input>

            <List_Input
              tilte="NICKNAME"
              inputName="nickname"
              inputType="text"
              onHandleChange={handleChange}
              inputValue={inputValue}
              className_li="mb-12"
              className_p="text-lg"
            >
              {inputValue["nickName"].length == 0 && (
                <span className="ml-3 text-sm text-red-600">不得為空</span>
              )}
            </List_Input>
            <List_Input
              tilte="PASSWORD"
              inputName="password"
              inputType="password"
              onHandleChange={handleChange}
              inputValue={inputValue}
              className_li="mb-12"
              className_p="text-lg"
            >
              {inputValue["password"].length <= 5 && (
                <span className="ml-3 text-sm text-red-600">至少六個字</span>
              )}
            </List_Input>
            <List_Input
              tilte="checkPASSWORD"
              inputName="checkPassword"
              inputType="password"
              onHandleChange={handleChange}
              inputValue={inputValue}
              className_li="mb-12"
              className_p="text-lg"
            >
              {!(inputValue["password"] == inputValue["checkPassword"]) && (
                <span className="ml-3 text-sm text-red-600">密碼不相同</span>
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
      <div className={`${isPending["isPending"] ? "show" : "close"}`}>
        <LoadingModal modalMessage="處理中" />
      </div>
      <div className={`${isPending["isError"] ? "show" : "close"}`}>
        <ErrorModal modalMessage="註冊失敗" />
      </div>
      <div className={`${isPending["isSuccess"] ? "show" : "close"}`}>
        <ErrorModal modalMessage="註冊成功" />
      </div>
    </>
  );
}
