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
      <section className="container mx-auto flex h-screen items-center">
        <div className="freeze-RectangleContainer freeze-RectangleSelf px-16 py-10">
          TEST
        </div>
      </section>
    </>
  );
}
