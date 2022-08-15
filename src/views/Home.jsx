import { useState } from "react";
import { Link } from "react-router-dom"
import Body_RectangleWrap from "../components/Body_RectangleWrap";
import Nav from "./Nav"
import Layout_Hscreen from "../Layout/Layout_Hscreen";

export default function Home() {
  const [isPending, setIsPending] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <Nav isPending={isPending} />
      <Layout_Hscreen>
        <Body_RectangleWrap bodyTitle="Login">
          <ul className="login-regist-wrapper font-light">
            <li className="mb-20">
              <p className="text-2xl">EMAIL</p>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full border-b-2 border-black" />
            </li>
            <li className="mb-20">
              <p className="text-2xl">PASSWORD</p>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="w-full border-b-2 border-black" />
            </li>
            <li className="text-xl">
              <Link to="/visiterTodolist"><p className="underline underline-offset-1 inline-block">訪客登入</p></Link>
              <span className="mx-5 border-l h-4 border-black inline-block"></span>
              <Link to="/visiterTodolist"><p className="underline underline-offset-1 inline-block mb-20">登入</p></Link>
              <Link to="/regist"><p className="block underline text-primary text-base">註冊</p></Link>
            </li>
          </ul>
        </Body_RectangleWrap>
      </Layout_Hscreen>
    </>
  );
}
