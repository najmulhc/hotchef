import React from "react";
import bannerbg from "./img/banner.png";
const Home = () => {
  return (
    <div className="mt-20">
      <div className="relative">
        <img src={bannerbg} alt="" />
        <div className="text-choco absolute w-full h-full justify-center items-center  top-0 left-0  font-bold">
          <h1>welcome to hotchef</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
