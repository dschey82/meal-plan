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
    
    async putMealFacts(params) {

    }
}

export default Client;