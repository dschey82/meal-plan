import React, {useState} from 'react';
import Client from '../Api/client.js';

const MealSubmit = props => {
    const [input, setInput] = useState('');

    const handleTextChange = async (event) => {
        setInput(event.target.value);
        var client = new Client();
        await client.getMeals();        
    }

    const handleMealSubmit = async () => {
        var client = new Client();
        client.getMealById(0);
        setInput('');
    };

    return (
        <div>
            <input  
                type="text"
                value={input}
                onChange={handleTextChange}
                placeholder="Meal name"
                required
            />
            <button onClick={handleMealSubmit}>Submit Meal</button>
        </div>
    );
};

export default MealSubmit;