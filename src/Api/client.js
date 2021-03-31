import axios from 'axios';

// class for communicating with api gateway
class Client {
    constructor(url)
    {
        if (url == null)
            this.apiBase = "https://m9omgndch4.execute-api.us-east-2.amazonaws.com/dev";
        else
            this.apiBase = url;
    }

    async getMealFacts() {
        var response = await axios.get(`${this.apiBase}/facts/`);
        console.log(response.data.body);
        return response;
    }
    
    async getMealFactsById(id) {
        var response = await axios.get(`${this.apiBase}/facts/${id}`);
        console.log(response.data);
        return response;
    }
    
    async putMealFacts(name, servingSize, calories, protein, fat, carbohydrate) {
        const params = {            
            "Item": {
                "name": name,
                "serving": servingSize,
                "calories": calories,
                "protein": protein,
                "fat": fat,
                "carbohydrate": carbohydrate
            }
        };
        console.log(params);
        await axios.post(`${this.apiBase}/facts/`, JSON.stringify(params), { headers: { 'Authorization': 'Bearer 7a9a6455se'}})
            .then(response => {
                console.log(response.data);
                return response;
            })
            .catch(err => {
                if (err.response) {
                    console.log(err.response);
                }
            });
    }
}

export default Client;