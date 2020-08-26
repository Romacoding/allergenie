import React from "react";

export default function getCurrentPosition() {
        navigator.geolocation.getCurrentPosition(function(position) {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
          return {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        })
        return (
            <div>
              {/* <p>Latitude is {geoLocation.latitude}</p>
              <p>Longitude is {geoLocation.longitude}</p> */}
            </div>
        );
};