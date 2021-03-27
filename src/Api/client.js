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

    async getMeals() {
        var response = await axios.get(`${this.apiBase}/facts/`);
        console.log(response.data);
        return response;
    }
    
    // search for existing meals based on entry
    async getMealById(id) {
        var response = await axios.get(`${this.apiBase}/facts/${id}`, {mode: 'cors'});
        console.log(response.data);
        return response;
    }
    // add meal nutrition information

    // add meal entry
}

export default Client;