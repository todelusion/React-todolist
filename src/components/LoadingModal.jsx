import React from "react";

export default function LoadingModal() {
  return (
    <div className="fixed top-0 z-10 flex h-screen w-full items-center justify-center">
      <div className="h-14 w-20 animate-spin rounded-[100%] border-2 border-primary md:h-20 md:w-32"></div>
    </div>
  );
}
