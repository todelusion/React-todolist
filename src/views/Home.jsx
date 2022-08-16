import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



import Body_RectangleWrap from "../components/Body_RectangleWrap";
import List_Input from "../components/List_Input";
import Nav from "./Nav";
import Layout_Hscreen from "../Layout/Layout_Hscreen";


// sdfcvdf@gmail.com
// sdfcvdf

export default function Home({ baseUrl }) {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: ''
  });
  const [isPending, setIsPending] = useState({
    isPending: false,
    isError: false,
    isSuccess: false
});


  const handleChange = (e) => {
    const { name, value } = e.target
    setInputValue(prevState => {
      return {...prevState, [name]: value}
    })
  }

  const handleSubmit = async() => {
    const obj = {
      "user": {
        "email": inputValue['email'],
        "password": inputValue['password']
      } 
    }
    console.log(obj)
    // await axios.post(`${baseUrl}/sign_in`)
  }
  

  return (
    <>
      <Nav isPending={isPending['isPending']} />
      <Layout_Hscreen>
        <Body_RectangleWrap bodyTitle="Login">
          <ul className="login-regist-wrapper font-light">
            <List_Input tilte="EMAIL" inputName="email" inputType="email" onHandleChange = {handleChange} inputValue={inputValue}></List_Input>
            <List_Input tilte="PASSWORD" inputName="password" inputType="text" onHandleChange = {handleChange} inputValue={inputValue}></List_Input>
            <li className="text-xl">
              <Link to="/visiterTodolist">
                <p className="inline-block underline underline-offset-1">
                  訪客登入
                </p>
              </Link>
              <span className="mx-5 inline-block h-4 border-l border-black"></span>
              <p onClick={handleSubmit} className="cursor-pointer mb-20 inline-block underline underline-offset-1">
                登入
              </p>
              <Link to="/regist">
                <p className="block text-base text-primary underline">註冊</p>
              </Link>
            </li>
          </ul>
        </Body_RectangleWrap>
      </Layout_Hscreen>
    </>
  );
}
