import axios from 'axios';

const API_URL = 'https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts'; 
const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export { fetchData };