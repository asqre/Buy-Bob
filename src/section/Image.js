import React, { useEffect, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import immigration from "../assets/images/img2.png";
import { FaXTwitter } from "react-icons/fa6";

function Image() {
  const [scale, setScale] = useState(0.6);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScale(1);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center h-[90vh] sm:h-[100vh] md:h-[120vh] lg:h-[90vh]  pt-[110px] pb-[100px]">
      <h1 className="absolute top-[15vh] z-10 ">Crab with knife</h1>
      <img src={immigration} alt="bob" className="mt-[-500px]" />
      {/* <img
        src="https://buybob.xyz/images/cc19db0bbff0a2d701d437a40155c802.png"
        src={immigration}
        alt="bob"
        className={`absolute bottom-[5vh] lg:w-3/4 xl:w-1/2 h-auto z-0 transform transition-transform duration-1000 ease-in-out`}
        style={{ transform: `scale(${scale})`, opacity: scale }}
      />
       */}
      <div className="bg-slate-700 flex justify-around z-10 text-[#24A1DE] gap-5  w-[100vw]">
        <div>
          <h3 className="leading-none text-white font-bold">
            Join the <br />
            telegram
          </h3>
          <FaTelegramPlane size={100} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Join with <br/> twitter</h1>
          <FaXTwitter size={100} color="black" />
        </div>
      </div>
    </div>
  );
}

export default Image;
