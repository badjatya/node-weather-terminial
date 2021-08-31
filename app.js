const axios = require("axios");
const weatherUrl =
  "http://api.weatherstack.com/current?access_key=e97b1fccb1d8615cf7726d19141a4745&query=indore";
const mapBoxUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmFkamF0eWEiLCJhIjoiY2tzenk4NGRnMnh1NDJ3b2QzejAxNzlvYyJ9.m3DvRsBldnIG4hLTIVfG8A";

const getLocation = async () => {
  try {
    const response = await axios.get(weatherUrl);
    const data = response.data.current;
    console.log(
      `It is currently ${data.temperature} degrees out. There is a ${data.precip}% chance of rain`
    );
  } catch (error) {
    console.error(error);
  }
};

const getGeoCoding = async () => {
  try {
    const response = await axios.get(mapBoxUrl);
    const data = response.data.features[0].geometry.coordinates;
    console.log("Latitude: " + data[0]);
    console.log("Longitude: " + data[1]);
  } catch (error) {
    console.error(error);
  }
};

// getLocation();
getGeoCoding();
