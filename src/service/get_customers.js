const axios = require('axios');

const getCustomers = async () => {
    const response = await axios.get('http://localhost:5000/api/v1/customers');
    return response.data;
}
export default getCustomers;
