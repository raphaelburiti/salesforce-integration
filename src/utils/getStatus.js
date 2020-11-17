const fetch = require('node-fetch');

module.exports = {
  async get(url, access_token) {

    const result = await fetch(url, {
      method: 'GET',
      headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${access_token}`
      }
    })
    .then(result => result.json())
    .then(response => { return response })
    .catch(error => { return error })

    return result;
  }
}