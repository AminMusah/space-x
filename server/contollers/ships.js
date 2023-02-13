const axios = require('axios');

const getShips = async (req, res) => {
    try {
        axios.get('https://api.spacexdata.com/v3/ships')
        .then(response => {
          res.send(response.data);
        })
        .catch(err => {
          console.error(err);
          res.status(500).send('Error making API request');
        });
    } catch (error) {
      res.status(500).send(error);
    }
};

module.exports = { getShips };