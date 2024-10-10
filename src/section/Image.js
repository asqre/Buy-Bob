import React, { useEffect, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";

function Image() {
  const [scale, setScale] = useState(0.6); 

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setScale(1);
    }, 100); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="relative flex flex-col items-center h-[150vh] bg-[#46499e] pt-[110px] pb-[100px]">
      <div className="text-white text-[150px] z-10 flex-grow font-semibold">bob the blob</div>
      <img
        src="https://buybob.xyz/images/cc19db0bbff0a2d701d437a40155c802.png"
        alt="bob"
        className={`absolute top-[40px] w-1/2 h-auto z-0 transform transition-transform duration-1000 ease-in-out`}
        style={{ transform: `scale(${scale})`, opacity: scale }} 
      />
      <div className="flex justify-center items-center z-10 text-white">
        <div className="text-[50px] w-[200px] leading-none">Join the telegram</div>
        <FaTelegramPlane size={100} />
      </div>
    </div>
  );
}

export default Image;
