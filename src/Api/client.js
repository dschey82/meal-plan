import axios from 'axios';

// class for communicating with api gateway
class Client {
    const apiBase = "https://m9omgndch4.execute-api.us-east-2.amazonaws.com/dev";
    // search for existing meals based on entry
    function getMealById(id) {
        var response = await axios.get(`https://${apiBase}/facts/${id}`);
        console.log(response.data);
        return response;
    }
    // add meal nutrition information

    // add meal entry
}