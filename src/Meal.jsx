import React from 'react';

const Meal = ({meal}) => {
    console.log(meal)
    const {strMeal, strMealThumb, strYoutube} = meal
    return (
        <div className='flex flex-col items-center mb-10'>
            <img className='w-72 rounded-xl mb-4' src={strMealThumb} alt="" />
            <h3 className='text-xl font-semibold'>{strMeal}</h3>
            <a href={strYoutube}> Tutorial </a>
        </div>
    );
};

export default Meal;