import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Body_RectangleWrap from "../components/Body_RectangleWrap";
import List_Input from "../components/List_Input";
import Layout_Hscreen from "../Layout/Layout_Hscreen";
import LoadingModal from "../components/LoadingModal";
import ErrorModal from "../components/ErrorModal";

import Nav from "./Nav";
// sdfcvdf@gmail.com
// sdfcvdf

export default function Home({ baseUrl }) {
  const emailRegexr =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
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

  const handleSubmit = async () => {
    const obj = {
      user: {
        email: inputValue["email"],
        password: inputValue["password"],
      },
    };
    console.log(obj);
    setIsPending((prevState) => {
      return { ...prevState, isPending: true };
    });
    try {
      await axios.post(`${baseUrl}/sign_in`, obj);
      setIsPending((prevState) => {
        return { ...prevState, isPending: false };
      });
    } catch (err) {
      setIsPending((prevState) => {
        return { ...prevState, isError: true };
      });
      setTimeout(
        setIsPending((prevState) => {
          return { ...prevState, isError: false };
        }),
        1000
      );
    }
  };

  return (
    <>
      <Nav isPending={isPending["isPending"]} />
      <Layout_Hscreen>
        <Body_RectangleWrap bodyTitle="Login">
          <ul className="login-regist-wrapper font-light">
            <List_Input
              tilte="EMAIL"
              inputName="email"
              inputType="email"
              onHandleChange={handleChange}
              inputValue={inputValue}
              className_li="mb-20"
              className_p="text-2xl"
            >
              {!inputValue["email"].match(emailRegexr) && (
                <span className="ml-3 text-sm text-red-600">
                  電子郵件格式錯誤
                </span>
              )}
            </List_Input>
            <List_Input
              tilte="PASSWORD"
              inputName="password"
              inputType="text"
              onHandleChange={handleChange}
              inputValue={inputValue}
              className_li="mb-20"
              className_p="text-2xl"
            >
              {inputValue["password"].length == 0 && (
                <span className="ml-3 text-sm text-red-600">不得為空</span>
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
      <div className={`${isPending["isPending"] ? "show" : "close"}`}>
        <LoadingModal modalMessage="處理中" />
      </div>
      <div className={`${isPending["isError"] ? "show" : "close"}`}>
        <ErrorModal modalMessage="註冊失敗" />
      </div>
    </>
  );
}
