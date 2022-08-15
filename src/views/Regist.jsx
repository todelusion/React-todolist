import React from 'react'
import axios from 'axios'

import { Link } from "react-router-dom"
import { useState } from 'react'


import Body_RectangleWrap from '../components/Body_RectangleWrap'
import Nav from "./Nav"
import Layout_Hscreen from '../Layout/Layout_Hscreen'

export default function Regist({ baseUrl }) {
    const [email, setEmail] = useState('')
    const [nickName, setNickName] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')

    const handleRegist = () => {
        const obj = {
            "user": {
                "email": email,
                "nickname": nickName,
                "password": password
            }
        }
        console.log(obj)

    }
    
  return (
    <>
        <Nav />
        <Layout_Hscreen>
            <Body_RectangleWrap bodyTitle="Regist">
            <ul className="pt-12 pl-20 pr-14 pb-14 md:pl-16 md:pt-20 md:pr-64 font-light">
                <li className="mb-12">
                    <p className="text-lg">EMAIL</p>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border-b-2 border-black" />
                </li>
                <li className="mb-12">
                    <p className="text-lg">NICKNAME</p>
                    <input type="text" value={nickName} onChange={(e) => setNickName(e.target.value)} className="w-full border-b-2 border-black" />
                </li>
                <li className="mb-12">
                    <p className="text-lg">PASSWORD</p>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border-b-2 border-black" />
                </li>
                <li className="mb-20">
                    <p className="text-lg">Confirm the PASSWORD</p>
                    <input type="text" value={checkPassword} onChange={(e) => setCheckPassword(e.target.value)} className="w-full border-b-2 border-black" />
                </li>
                <li className="text-xl flex justify-between items-end">
                    <Link to="/"><p className="underline text-base">返回</p></Link>
                    <p onClick={handleRegist} className="underline underline-offset-1 cursor-pointer">下一步</p>
                </li>
            </ul>   
            </Body_RectangleWrap>
        </Layout_Hscreen>
    </>
  )
}
