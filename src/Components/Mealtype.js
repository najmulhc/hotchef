import React from 'react';
import { useParams } from 'react-router-dom';
import useMeals from '../hooks/useMeals';
import Meal from './Meal';

const Mealtype = () => {
    const {mealType} = useParams();
    const [meals] = useMeals();
    const displayMeals = meals.filter(meal => meal.type === mealType); 
    return (
        <div className='mt-20 container mx-auto'>
             <h1 className="text-choco text-6xl font-bold text-center pt-4 mb-8">Our {mealType} Menu</h1> 
             <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-12 mx-4'>
                {
                    displayMeals.map(meal =>{
                        return(
                            <Meal meal={meal} key={meal.id}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Mealtype;