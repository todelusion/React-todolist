import React from "react";
import { Link } from "react-router-dom"

export default function Nav({ isPending }) {
  return (
    <Link to="/">
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
    </Link>
  );
}
