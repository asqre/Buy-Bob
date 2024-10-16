import React, { useEffect, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import immigration from "../assets/images/img2.png";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Image() {
  const [scale, setScale] = useState(0.6);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScale(1);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center  xl:h-[65vh]">
      <h1 className="absolute top-[15vh] z-10">Crab with knife</h1>
      <img
        src={immigration}
        alt="bob"
        className="h-[80vh] w-[100vw] object-cover lg:w-auto lg:h-auto"
      />
      <div
        className=" flex flex-row justify-around text-[#24A1DE] gap-5 py-8  w-[100vw]"
        style={{ background: "linear-gradient(to bottom, #beae9a, #0070a6)" }}
      >
        <div className="flex flex-col justify-center items-center ">
          <h1 className="leading-none text-2xl md:text-5xl text-white font-bold">
            Join the <br />
            telegram
          </h1>
          <a href="https://t.me/+5WcQbex5ixAyM2Q5" target="_blank">
            <FaTelegramPlane className="w-[40px] h-[40px] md:w-16 md:h-16 lg:w-24 lg:h-24" />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white text-2xl md:text-5xl font-bold leading-none">
            Join with <br /> twitter
          </h1>
          <a href="https://x.com/crabwithknifex" target="_blank">
            <FaXTwitter className="w-[40px] h-[40px] md:w-16 md:h-16 lg:w-24 lg:h-24" color="black" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Image;
