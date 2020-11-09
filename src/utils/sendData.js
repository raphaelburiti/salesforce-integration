const fetch = require('node-fetch');

module.exports = {
  async create(key, data, url, token) {
    const instanceUrl    = url;
    const instanceToken  = token;
    const extensionsKey  = key;
    const extensionsData = data;

    const result = await fetch(`${instanceUrl}/data/v1/async/dataextensions/key:${extensionsKey}/rows`, {
      method: 'POST',
      headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${instanceToken}`
      },
      body: JSON.stringify(extensionsData)
    })
    .then(result => result.json())
    .then(response => { return response })
    .catch(error => { return error })

    return result;
  }
}