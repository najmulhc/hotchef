import React from 'react';
import useMeals  from '../hooks/useMeals'
import Meal from './Meal';
const Meals = () => {
    const [meals] = useMeals();
    return (
        <div className='mt-20 container mx-auto'>
            <h1 className='font-bold text-5xl text-center text-lal my-12'>  Our Meals</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-12 mx-4'>
                {
                    meals.map(meal =>{
                        return(
                            <Meal meal={meal}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Meals;