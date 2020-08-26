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
        });
      const location = response.Location;
      const forecastForToday = response.Location.periods[0];
      /* const periods = response.Location.periods; */
      /* console.log(periods.map(gen => console.log(`${gen.Type}'s Index: ${gen.Index}`))); */

      res.status(200).json({
        location: location.City,
        state: location.State,
        zip: location.ZIP,
        displayLocation: location.DisplayLocation,
        pollenIndex: forecastForToday.Index,
        triggerOne: forecastForToday.Triggers[0].Name,
        triggerTwo: forecastForToday.Triggers[1].Name,
        triggerThree: forecastForToday.Triggers[2].Name
      });

};
