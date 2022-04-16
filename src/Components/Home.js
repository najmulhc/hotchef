import React, { useState } from "react";
import HomeMeals from "./HomeMeals";
import bannerbg from "./img/banner.png";
const Home = () => {
  const [mealType , setMealType] = useState("breakfast");
  const breakfast = () => {
    setMealType("breakfast");
  }
  const lunch = () => {
    setMealType('lunch');
  }
  const dinner = () => {
    setMealType('dinner');
  }
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
      <h1 className="text-choco text-6xl font-bold text-center pt-4 mb-8">Our dishes</h1> 
      <ul className="flex gap-16 justify-center items-center">
        <li><button  className="text-lal active:text-choco font-bold hover:underline pb-2 text-2xl " onClick={breakfast}>Breakfast</button></li>
        <li><button className="text-lal active:text-choco font-bold hover:underline pb-2 text-2xl " onClick={lunch}>Lunch</button></li>
        <li><button className="text-lal active:text-choco font-bold hover:underline pb-2 text-2xl " onClick={dinner}>Dinner</button></li>
    
      </ul>
        <HomeMeals mealtype={mealType} />
     
    </div>
  );
};

export default Home;
