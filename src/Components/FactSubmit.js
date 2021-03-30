import React, {useState} from 'react';

const FactSubmit = props => {


    return (
        <div>
            <input type="text" id="name" placeholder="food name" />
            <input type="text" id="serving" placeholder="serving size" />
            <input type="text" id="calories" placeholder="100" />
            <input type="text" id="protein" placeholder="5" />
            <input type="text" id="fat" placeholder="5" />
            <input type="text" id="carbohydrate" placeholder="15" />
            <button>Submit New Meal Facts</button>
        </div>
    );
};

export default FactSubmit;