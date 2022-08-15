import React from 'react'
import Body_RectangleWrap from '../components/Body_RectangleWrap'
import Nav from "./Nav"
import Layout_Hscreen from '../Layout/Layout_Hscreen'

export default function Regist() {
  return (
    <>
        <Nav />
        <Layout_Hscreen>
            <Body_RectangleWrap bodyTitle="Regist">
                <ul className="login-regist-wrapper font-light">
            <li className="mb-20">
              <p className="text-2xl">EMAIL</p>
              <input type="email" className="w-full border-b-2 border-black" />
            </li>
            <li className="mb-20">
              <p className="text-2xl">PASSWORD</p>
              <input type="password" className="w-full border-b-2 border-black" />
            </li>
          </ul>
            </Body_RectangleWrap>
        </Layout_Hscreen>
    </>
  )
}
