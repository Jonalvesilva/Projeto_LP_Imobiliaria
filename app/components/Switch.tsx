"use client";
import { useState } from "react";

export default function Switch() {
  const [change, setChange] = useState(false);

  const handleClick = (newState: boolean) => {
    setChange(newState);
  };

  return (
    <div className="mx-8 shadow rounded-full h-10 my-8 flex p-1 relative items-center">
      <div
        className="w-full flex justify-center cursor-pointer"
        onClick={() => handleClick(false)}
      >
        <button className="switch">Alugar</button>
      </div>
      <div
        className="w-full flex justify-center cursor-pointer"
        onClick={() => handleClick(true)}
      >
        <button className="switch">Comprar</button>
      </div>
      <span
        className={`elSwitch bg-indigo-600 shadow text-white flex items-center justify-center w-1/2 
        rounded-full h-8 transition-all top-[4px] absolute ${
          change ? "left-[50%]" : "left-1"
        }`}
      >
        {change ? "Comprar" : "Alugar"}
      </span>
    </div>
  );
}
