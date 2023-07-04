import React from "react";
import lodd from "./22.gif"

const Loader = () => {
  return (
    <>
      <div className="absolute z-[100] rounded-lg border bg-white top-[52%] left-[30%]">
        <img
          className="[250px]"
          src={lodd}
          alt="loading..."
        />
      </div>
    </>
  );
};

export default Loader;
