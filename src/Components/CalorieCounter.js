import React from 'react';
import MealSubmit from '../Components/MealSubmit.js'
import FactSubmit from '../Components/FactSubmit.js'

const CalorieCounter = props => {
    return (
        <div style={{display: 'flex', justifyContent:'center', aligItems:'center'}}>
            <header>Calorie Counter!</header>
            <MealSubmit />
            <FactSubmit />
        </div>
    );
};

export default CalorieCounter;