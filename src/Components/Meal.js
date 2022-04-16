import React from 'react';

const Meal = ({meal}) => {
    return (
        <div className='w-full p-8 rounded-md bg-red-400 hover:bg-opacity-100 bg-opacity-25 border border-lal shadow-md'>
            <img src={meal.img} className="w-full ooacity-100" alt="" />
            <h1 className='text-lal text-3xl text-center font-semibold my-4'>{meal.name}</h1>
        </div>
    );
};

export default Meal;