const axios = require('axios');

async function get_customers() {
    let res = await axios.get('http://localhost:5000/api/v1/customers');
    return res;
}
console.log("getcustomers ", get_customers())
//get_customers();
/*export const get_customers = axios.get('http://localhost:5000/api/v1/customers')
    .then(function (response) {
        // handle success
        return response
    })
    .catch(function (error) {
        // handle error
        return console.log(error);
    })
    .finally(function () {
        // always executed
    });

/*const foo = axios.get('http://localhost:5000/api/v1/customers')
    .catch(function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
    });
*/