import React, { useEffect, useState } from 'react';
import Meal from './Meal';

const Meals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])

    return (
        <div className='max-w-[1280px] mx-auto'>
            <h1 className='text-2xl text-center mb-8'>Leatest Meals : {meals.length}</h1>
            <div className="grid grid-cols-4">
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>

        </div>
    );
};

export default Meals;