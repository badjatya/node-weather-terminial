const request = require("request");
const geoCode = require("./utils/geoCode");

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

geoCode("Indore", (error, data) => {
  console.log("Error: " + error + "\nData: " + data.latitude);
  console.log("--------------");
});
