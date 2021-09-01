const request = require("request");
// const weatherUrl =
//   "http://api.weatherstack.com/current?access_key=e97b1fccb1d8615cf7726d19141a4745&query=indore";

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
//     }
// })

// const geocodeURL =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmFkamF0eWEiLCJhIjoiY2tzenk4NGRnMnh1NDJ3b2QzejAxNzlvYyJ9.m3DvRsBldnIG4hLTIVfG8A";

// request({ url: geocodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to location services!");
//   } else if (response.body.features.length === 0) {
//     console.log("Unable to find location. Try another search.");
//   } else {
//     const latitude = response.body.features[0].center[0];
//     const longitude = response.body.features[0].center[1];
//     console.log(latitude, longitude);
//   }
// });

const geoCode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiYmFkamF0eWEiLCJhIjoiY2tzenk4NGRnMnh1NDJ3b2QzejAxNzlvYyJ9.m3DvRsBldnIG4hLTIVfG8A`;

  request({ url: url, json: true }, (error, response) => {
    // Checking if there is an error
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

geoCode("Indore", (error, data) => {
  console.log("Error: " + error + "\nData: " + data.latitude);
  console.log("--------------");
});
