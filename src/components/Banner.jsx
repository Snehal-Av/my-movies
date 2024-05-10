import React from "react";

const Banner = () => {
  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://media.wired.com/photos/59de99f39db9cf4266631b87/master/w_2560%2Cc_limit/Movies-TopArt.jpg)`,
      }}
    >
      <div className="text-white text-2xl text-center w-full bg-gray-900/60 p-4">
     Avenger
      </div>
    </div>
  );
};

export default Banner;
