import React from "react";

export default function LoadingModal({ modalMessage, handleError }) {

  return (
    <div onClick={handleError} className="fixed top-0 z-10 flex h-screen w-full flex-col items-center justify-center">
      <div className="mb-14 h-14 w-20 animate-spin rounded-[100%] border-2 border-primary md:h-20 md:w-32"></div>
      <h3 className="font-dela text-2xl text-primary">{modalMessage}</h3>
    </div>
  );
}
