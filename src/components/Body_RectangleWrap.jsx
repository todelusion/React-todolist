import React from "react";

export default function Body_RectangleWrap({ children, bodyTitle }) {
  return (
    <div className="freeze-RectangleContainer freeze-RectangleSelf container relative mx-auto">
      <h2 className="absolute top-1 left-1 font-dela">{bodyTitle}</h2>
      {children}
    </div>
  );
}
