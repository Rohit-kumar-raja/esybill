const axios = require('axios');
const querystring = require('querystring');

async function sendSMS(message, number) {
  const apiKey = process.env.TEXTLOCAL_API_KEY;
  const data = querystring.stringify({
    apiKey,
    numbers: number,
    sender: 'ASRGRP',
    message
  });
  axios
    .post('https://api.textlocal.in/send/', data)
    .then((response) => response.data.status)
    .catch((error) => {
      // eslint-disable-next-line
      console.log(JSON.stringify(error));
      return false;
    });
  return true;
}

module.exports = { sendSMS };
