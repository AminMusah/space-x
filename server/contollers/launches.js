const axios = require("axios");

//get all launches
const getLaunches = async (req, res) => {
  try {
    axios
      .get("https://api.spacexdata.com/v3/launches")
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error making API request");
      });
  } catch (error) {
    res.status(500).send(error);
  }
};

//get a single launch by flight number
const getFlightNumber = async (req, res) => {
  try {
    const flightNumber = req.params.flightNumber;

    axios
      .get(`https://api.spacexdata.com/v3/launches/${flightNumber}`)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  } catch (error) {
    console.log(error);
  }
};

//get single mission 
const getMission = async (req, res) => {
  try {
    const missionId = req.params.missionId;

    axios
      .get(`https://api.spacexdata.com/v3/missions/${missionId}`)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  } catch (error) {
    console.log(error);
  }
};

//get single rocket 
const getRocket = async (req, res) => {
  try {
    const rocketId = req.params.rocketId;

    axios
      .get(`https://api.spacexdata.com/v3/rockets/${rocketId}`)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  } catch (error) {
    console.log(error);
  }
};





module.exports = { getLaunches, getFlightNumber, getMission, getRocket};
