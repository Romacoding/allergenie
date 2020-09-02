import axios from "axios";

export default async (req, res) => {
      const { zip } = req.query;
      const response = await axios
        .get(`https://www.pollen.com/api/forecast/current/pollen/${zip}`, {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36",
            Referer: "https://www.pollen.com/api/forecast/current/pollen/11223",
          },
        })
        .then(function (responseData) {
          return responseData.data;
        }).catch(err => {
          console.log(err);
        });
      
      const location = response.Location;
      const forecastForToday = response.Location.periods[1] === undefined ? {Index: " ", Triggers: [{Name : " "}, {Name : " "}, {Name : " "}]} : response.Location.periods[1];

      const weatherData = await axios
      .get(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=b5dd745e35603cb1222cf95c94da150f`)
      .then(function (responseData) {
        return responseData.data;
      }).catch(err => {
        console.log(err);
      });

      const pollutionData = await axios
      .get(`http://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&zipCode=${zip}&API_KEY=C29F9CDD-2831-4C7B-929C-B8682FBAADF3`)
      .then(function (responseData) {
        return responseData.data;
      }).catch(err => {
        console.log(err);
      });

      res.status(200).json({
        location: location.City,
        state: location.State,
        zip: location.ZIP,
        displayLocation: location.DisplayLocation,
        pollenIndex: forecastForToday.Index,
        triggerOne: forecastForToday.Triggers[0].Name,
        triggerTwo: forecastForToday.Triggers[1].Name,
        triggerThree: forecastForToday.Triggers[2].Name,
        responseObject: response,
        weatherData: weatherData,
        pollutionData: pollutionData
      });

};
