import { useState } from "react";
import { Link } from "react-router-dom"

export default function Home() {
  const [isPending, setIsPending] = useState(false);

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
      <section className="mx-auto flex h-screen items-center">
        <div className="relative freeze-RectangleContainer freeze-RectangleSelf container mx-auto">
          <h2 className="absolute top-1 left-1 font-dela">LOGIN</h2>
          <ul className="login-regist-wrapper font-light">
            <li className="mb-20">
              <p className="text-2xl">EMAIL</p>
              <input type="email" className="w-full border-b-2 border-black" />
            </li>
            <li className="mb-20">
              <p className="text-2xl">PASSWORD</p>
              <input type="password" className="w-full border-b-2 border-black" />
            </li>
            <li className="text-xl">
              <Link to="/visiterTodolist"><p className="underline underline-offset-1 inline-block">訪客登入</p></Link>
              <span className="mx-5 border-l h-4 border-black inline-block"></span>
              <Link to="/visiterTodolist"><p className="underline underline-offset-1 inline-block mb-20">登入</p></Link>
              <p className="block underline text-primary text-base">註冊</p>
          </li>
          </ul>
        </div>
      </section>
    </>
  );
}
