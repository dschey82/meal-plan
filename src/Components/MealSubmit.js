import React, {useState} from 'react';

const MealSubmit = props => {
    const [input, setInput] = useState('');

    const handleMealSubmit = () => {
        // check if meal exists in database
        // gather nutrition info for meal
        // add meal entry for user
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