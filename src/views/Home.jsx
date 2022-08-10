import { useState } from "react";

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
        <div className="freeze-RectangleContainer freeze-RectangleSelf container mx-auto">
          <ul className="pt-12 pl-20 pr-14 pb-32 font-light">
            <li className="mb-20">
              <p className="text-2xl">EMAIL</p>
              <input type="text" className="w-full border-b-2 border-black" />
            </li>
            <li className="mb-20">
              <p className="text-2xl">PASSWORD</p>
              <input type="text" className="w-full border-b-2 border-black" />
            </li>
            <li className="text-xl">
              <div>
                <button>訪客登入</button>
                <span className="mx-5 h-4 border-l border-black"></span>
                <button>登入</button>
              </div>
            </li>
            <li>4</li>
          </ul>
        </div>
      </section>
    </>
  );
}
