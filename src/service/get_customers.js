const axios = require('axios');


const get_customers = async () => {
    return new Promise((result, reject) => {
        const response = axios.get('http://localhost:5000/api/v1/customers')
        result(response)
        reject('erro')
    })
    //const response = await axios.get('http://localhost:5000/api/v1/customers')
    //const data = await response.json()
    //return response.data
}
//console.log("fora da function ", get_customers().then())
export default get_customers();
//export default getCustomers = get_customers;
