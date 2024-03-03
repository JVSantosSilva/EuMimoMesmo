// /home/apollo/EuMimoMesmo/src/services/mercadoLivreService.js
const axios = require('axios');
const qs = require('qs');
require('dotenv').config();

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const code = process.env.CODE; 
const redirect_uri = process.env.REDIRECT_URI;


const getToken = async () => {
  const url = 'https://api.mercadolibre.com/oauth/token';
  const data = qs.stringify({
    grant_type: 'authorization_code',
    client_id,
    client_secret,
    code,
    redirect_uri,
  });

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

getToken();


