const fetch = require('node-fetch');

module.exports = {
  async get() {
    const result = await fetch('https://mcryqx248tzqhvpgqv66jb8bpbt0.auth.marketingcloudapis.com/v2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "grant_type": "client_credentials",
        "client_id": "8nhvs6vc9bzoa7lbzp611kcp",
        "client_secret": "b1ZMULJbWLBI3FvesoP7SaKy",
        "account_id": "100025949"
      })
    })
    .then(res => res.json())
    .then(response => { return response })
    .catch(error => { return error })

    return result;
  }
}