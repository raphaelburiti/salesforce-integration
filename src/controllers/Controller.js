const authToken = require('../utils/authToken');
const sendData = require('../utils/sendData');
const fetch = require('node-fetch');

module.exports = {

  async product(req, res) {
    const responseAuthToken = await authToken.get();
    const { access_token, rest_instance_url } = responseAuthToken;
    const { email, product_id, product_title, navigation_date, product_type } = req.body;

    const dataExtensionsKey  = '40C9EC5E-A51B-4BC0-8287-59C61B31B442';

    const data = {
      "items": [{
        "email"          : email,
        "product_id"     : product_id,
        "product_title"  : product_title,
        "navigation_date": navigation_date,
        "product_type"   : product_type
      }]
    };

    console.log('chegou')

    setTimeout(async () => {
      console.log('disparou')

      const response = await sendData.create(dataExtensionsKey, data, rest_instance_url, 'access_token'); 
      
      if(response.errorcode != null) {
        res.status(400).json(response)
      }
      res.status(200).json(response)

    }, 20000)
  },

  async register(req, res) {
    const responseAuthToken = await authToken.get();
    const { access_token, rest_instance_url } = responseAuthToken;
    const { email, product_id, product_title, navigation_date, product_type } = req.body;

    const dataExtensionsKey  = '40C9EC5E-A51B-4BC0-8287-59C61B31B442';

    const data = {
      "items": [{
        "email"          : email,
        "product_id"     : product_id,
        "product_title"  : product_title,
        "navigation_date": navigation_date,
        "product_type"   : product_type
      }]
    };
    
    const response = await sendData.create(dataExtensionsKey, data, rest_instance_url, access_token); 
    
    if(response.errorcode != null) {
      res.status(400).json(response)
    }
    res.status(200).json(response)
  },

  async wishlist(req, res) {
    const responseAuthToken = await authToken.get();
    const { access_token, rest_instance_url } = responseAuthToken;
    const { email, product_id, product_title, navigation_date, product_type } = req.body;

    const dataExtensionsKey  = '40C9EC5E-A51B-4BC0-8287-59C61B31B442';

    const data = {
      "items": [{
        "email"          : email,
        "product_id"     : product_id,
        "product_title"  : product_title,
        "navigation_date": navigation_date,
        "product_type"   : product_type
      }]
    };
    
    const response = await sendData.create(dataExtensionsKey, data, rest_instance_url, access_token); 
    
    if(response.errorcode != null) {
      res.status(400).json(response)
    }
    res.status(200).json(response)
  }
}
