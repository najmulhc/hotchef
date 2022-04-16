import React from 'react';
import useMeals from '../hooks/useMeals';
import Meal from './Meal';

const HomeMeals = ({mealtype}) => {
    const [meals]= useMeals();
    const desiredMeals = meals.filter(meal => meal.type === mealtype);
    const homeMeals = desiredMeals.splice(0,3);
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-12  container mx-auto'>
            {
                homeMeals.map(meal=> {
                    return (
                        <Meal meal={meal} />
                    )
                })
            }
        </div>
    );
};

export default HomeMeals;