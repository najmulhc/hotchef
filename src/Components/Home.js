import React from "react";
import bannerbg from "./img/banner.png";
const Home = () => {
  return (
    <div className="mt-20">
      <div className="relative">
        <img src={bannerbg} alt="" />
        <div className="text-choco absolute flex flex-col w-full h-full justify-center items-center  top-0 left-0  font-bold">
          <h1 className="text-4xl my-4 font-semibold text-center">Search Your favorate food</h1> 
          <div className="flex text-3xl rounded-full bg-white   border border-choco">
            <input type="text"className="py-4 px-4 rounded-l-full" name="" id="" />
            <button className="py-4 bg-choco text-white rounded-full px-6 ">Search</button>
            
          </div>
        </div>
      </div>
      <h1 className="text-choco text-3xl font-medium text-center pt-4">Our dishes</h1>
      <hr className="w-1/6 border border-choco mx-auto mb-3" />
    </div>
  );
};

export default Home;
