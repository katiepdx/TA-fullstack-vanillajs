const fetch = require('node-fetch');

const getDefinition = (word) => {
  return fetch(`https://owlbot.info/api/v4/dictionary/${word}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${process.env.API_KEY}`
    },
  });
};

module.exports = { getDefinition };
