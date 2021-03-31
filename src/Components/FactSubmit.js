import React, {useState} from 'react';
import Client from '../Api/client.js'

const FactSubmit = props => {
    const [name, setName] = useState('');
    const [serving, setServing] = useState('');
    const [calories, setCalories] = useState('');
    const [protein, setProtein] = useState('');
    const [fat, setFat] = useState('');
    const [carbohydrate, setCarbohydrate] = useState('');

    const resetState = () =>
    {
        setName('');
        setServing('');
        setCalories('');
        setProtein('');
        setFat('');
        setCarbohydrate('');
    }

    const submitNewFact = async event => {
        // validate data entry??
        
        // submit new fact to server
        var client = new Client();
        await client.putMealFacts(name, serving, calories, protein, fat, carbohydrate);

        // provide feedback on state of submission
        resetState();
    };

    return (
        <div>
            <input type="text" label="Meal Name" id="name" placeholder="food name" value={name} onChange={(event) => setName(event.target.value)} />
            <input type="number" id="serving" placeholder="serving size (g)" value={serving} onChange={(event) => setServing(event.target.value)}/>
            <input type="number" id="calories" placeholder="calories (kcal)" value={calories} onChange={(event) => setCalories(event.target.value)}/>
            <input type="number" id="protein" placeholder="protein (g)" value={protein} onChange={(event) => setProtein(event.target.value)}/>
            <input type="number" id="fat" placeholder="fat (g)" value={fat} onChange={(event) => setFat(event.target.value)}/>
            <input type="number" id="carbohydrate" placeholder="carbohydrate (g)" value={carbohydrate} onChange={(event) => setCarbohydrate(event.target.value)}/>
            <button onClick={submitNewFact} >Submit New Meal Facts</button>        
        </div>
    );
};

export default FactSubmit;