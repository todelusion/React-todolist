import React from 'react'
import errorIcon from "../assets/errorIcon.svg"

export default function ErrorModal({ modalMessage }) {
  return (
    <div className="fixed top-0 z-10 flex h-screen w-full flex-col items-center justify-center">
      <div className="mb-20 h-14 w-20 -mt-5  md:w-32 md:h-20">
          <img src={errorIcon} alt=""/>
      </div>
      <h3 className="font-dela text-2xl text-primary">{modalMessage}</h3>
    </div>
  )
}
