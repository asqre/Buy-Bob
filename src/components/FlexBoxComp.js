import React from "react";

function FlexBoxComp({ images }) {
  return (
    <div className="w-full sm:w-[80%] md:w-1/3 flex flex-col gap-8 mx-auto">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt="bob"
          className="w-full h-auto object-contain"
        />
      ))}
    </div>
  );
}

export default FlexBoxComp;
