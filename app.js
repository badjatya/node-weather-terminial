const geoCode = require("./utils/geoCode");
const forecast = require("./utils/forecast");

geoCode("Indore", (error, data) => {
  if (error) {
    return console.log(error);
  }
  forecast(data.latitude, data.longitude, (error, data) => {
    if (error) {
      return console.log(error);
    }
    console.log("Data", data);
  });
});
