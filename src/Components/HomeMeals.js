import React from 'react';
import { useNavigate } from 'react-router-dom';
import useMeals from '../hooks/useMeals';
import Meal from './Meal';

const HomeMeals = ({mealtype}) => {
    const [meals]= useMeals();
    const desiredMeals = meals.filter(meal => meal.type === mealtype);
    const homeMeals = desiredMeals.splice(0,3);
    const navigate = useNavigate();
    const goToMealtypePage = (mealtype) => {
        navigate('/'+mealtype);
    }
    return (
       <div className=" mb-8">
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-12  container mx-auto'>
            {
                homeMeals.map(meal=> {
                    return (
                        <Meal meal={meal} />
                    )
                })
            }
            
        </div>
        <button className='rounded-full bg-choco text-white font-semibold px-8 py-2' onClick={()=> goToMealtypePage(mealtype)}>Load more {mealtype} </button>
       </div>
    );
};

export default HomeMeals;