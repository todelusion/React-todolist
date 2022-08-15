import React from "react";

export default function LoadingModal({ modalMessage }) {
  return (
    <div className="fixed top-0 z-10 flex flex-col h-screen w-full items-center justify-center">
      <div className="mb-10 h-14 w-20 animate-spin rounded-[100%] border-2 border-primary md:h-20 md:w-32"></div>
      <h3 className="font-dela text-primary text-2xl">{modalMessage}</h3>
    </div>
  );
}
