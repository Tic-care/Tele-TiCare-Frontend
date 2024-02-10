// sessionService.js

import axios from 'axios';

const apiUrl = 'http://localhost:5000';  

const getSessionData = () => {
  return axios.get(`${apiUrl}/sessions`)
    .then(response =>{ console.log(response.data); } )
    .catch(error => {
      console.error('Error fetching sessions:', error);
      throw error;
    });
};

export { getSessionData };
