import React from 'react';
import MealSubmit from '../Components/MealSubmit.js'

const CalorieCounter = props => {
    return (
        <div style={{display: 'flex', justifyContent:'center', aligItems:'center'}}>
            <header>Calorie Counter!</header>
            <MealSubmit />            
        </div>
    );
};

export default CalorieCounter;