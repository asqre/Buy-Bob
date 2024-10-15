import React from "react";

const CustomPath = ({img , name, bgColor, link}) => {
  return (
    <a href={link} target="_blank" className="relative w-[70vw]  h-[8vh] sm:w-[50vw] sm:h-[8vh] md:w-[30vw] md:h-[8vh] lg:w-[30vw] lg:h-[8vh] xl:w-[330px] xl:h-[80px]">
      <div className="absolute z-10 w-full h-full top-[-9px] left-[-9px] bg-white rounded-xl border-2 border-[#000000] flex items-center justify-center"
      style={{backgroundColor:`${bgColor}`}}>
         <div className="flex items-center gap-4">
          <img src={img} alt="birdeye" className="w-16 h-16"/>
          <div className="font-bold text-3xl md:text-4xl xl:text-5xl mr-2" style={{fontFamily:"Bebas Neue", letterSpacing:"1px"}} >{name}</div>
         </div>
      </div>
      <div className="w-full h-full bg-black rounded-xl" />
    </a>
  );
};

export default CustomPath;
