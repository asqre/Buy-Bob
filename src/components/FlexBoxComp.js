import React from "react";

function FlexBoxComp({ images }) {
  return (
    <div className="w-full sm:w-[80%] md:w-1/3 flex flex-col gap-5 mx-auto">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt="bob"
          className="w-full h-auto object-contain border-2 border-black"
        />
      ))}
    </div>
  );
}

export default FlexBoxComp;
