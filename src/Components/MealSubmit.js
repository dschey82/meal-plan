import React, {useState} from 'react';
import Client from '../Api/client.js';

const MealSubmit = props => {
    const [input, setInput] = useState('');

    const handleMealSubmit = () => {
        var client = new Client();
        client.getMealById(0);
        setInput('');
    };

    return (
        <div>
            <input  
                type="text"
                value={input}
                onChange={event => setInput(event.target.value)}
                placeholder="Meal name"
                required
            />
            <button onClick={handleMealSubmit}>Submit Meal</button>
        </div>
    );
};

export default MealSubmit;