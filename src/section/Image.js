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
    <div className="relative flex flex-col justify-center items-center h-[70vh] sm:h-[80vh] md:h-[100vh] lg:h-[110vh] bg-[#46499e] pt-[110px] pb-[100px]">
      <h1 className="absolute top-[10vh] z-10">bob the blob</h1>
      <img
        src="https://buybob.xyz/images/cc19db0bbff0a2d701d437a40155c802.png"
        alt="bob"
        className={`absolute bottom-[20vh] lg:w-1/2 h-auto z-0 transform transition-transform duration-1000 ease-in-out`}
        style={{ transform: `scale(${scale})`, opacity: scale }}
      />
      <div className="absolute bottom-[10vh] flex z-10 text-white gap-5">
        <h3 className="leading-none">
          Join the <br />
          telegram
        </h3>
        <FaTelegramPlane size={100} />
      </div>
    </div>
  );
}

export default Image;
