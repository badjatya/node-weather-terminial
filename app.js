const axios = require("axios");

const getLocation = async () => {
  try {
    const response = await axios.get(
      "http://api.weatherstack.com/current?access_key=e97b1fccb1d8615cf7726d19141a4745&query=indore"
    );
    const data = response.data.current;
    console.log(
      `It is currently ${data.temperature} degrees out. There is a ${data.precip}% chance of rain`
    );
  } catch (error) {
    console.error(error);
  }
};

getLocation();
