const authToken = require('../utils/authToken');
const sendData = require('../utils/sendData');
const getStatus = require('../utils/getStatus');

module.exports = {

  async navigation(req, res) {
    const responseAuthToken = await authToken.get();
    const { access_token, rest_instance_url } = responseAuthToken;
    const { email, product_id, product_title, navigation_date, product_type } = req.body;

    const dataExtensionsKey  = '40C9EC5E-A51B-4BC0-8287-59C61B31B442';

    const data = {
      "items": [{
        // "token"          : access_token,
        "email"          : email,
        "product_id"     : product_id,
        "product_title"  : product_title,
        "navigation_date": new Date(),
        "product_type"   : product_type
      }]
    };

    setTimeout(async () => {
      const response = await sendData.create(dataExtensionsKey, data, rest_instance_url, access_token); 
      
      if(response.errorcode != null) {
        res.status(400).json(response)
      }
      res.status(200).json(response)

    // }, 600000)
    }, 0)
  },

  async register(req, res) {
    const responseAuthToken = await authToken.get();
    const { access_token, rest_instance_url } = responseAuthToken;
    const { email, first_name, last_name, birthday } = req.body;

    const dataExtensionsKey  = 'E1DD3061-93A8-43F1-8195-74E2C4ABA409';

    const data = {
      "items": [{
        "subscriberKey": email,
        "email"        : email,
        "first_name"   : first_name,
        "last_name"    : last_name,
        "submitted"    : new Date(),
        "birthday"     : new Date(birthday)
      }]
    };

    console.log(data)
    
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
  },

  async status(req, res) {
    const { access_token, rest_instance_url } = await authToken.get();
    const { id } = req.params;

    const url = `${rest_instance_url}/data/v1/async/${id}/status`;

    const response = await getStatus.get(url, access_token); 
    
    res.status(200).json(response)
  }

}
