const geoCode = require("./utils/geoCode");
const forecast = require("./utils/forecast");

// geoCode("Indore", (error, data) => {
//   console.log(
//     "Error: " + error + "\nData: " + data.latitude + "\n " + data.longitude
//   );
//   console.log("--------------");
// });

forecast(44.1545, -75.7088, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
