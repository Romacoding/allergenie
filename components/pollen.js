import React from "react";
// import { usePosition } from "../utils/usePosition";

export default function Pollen({
  date,
  location,
  state,
  zip,
  displayLocation,
  pollenIndex,
  triggerOne,
  triggerTwo,
  triggerThree,
}) {
    
  // const { latitude, longitude, timestamp, accuracy, error } = usePosition(
  //   false
  // );

  return (
    <div>
      <p>Today is: {date}.</p>
      {/* <h2>Geolocated data from your browser</h2>
      latitude: {latitude}
      <br />
      longitude: {longitude}
      <br />
      timestamp: {timestamp}
      <br />
      accuracy: {accuracy && `${accuracy}m`}
      <hr></hr>
      <h2>Data retrived from your internet connection</h2>
      Your IP is: {query} and you are from {country}, {city}, {region}
      <br />
      Internet Service Provider: {isp && isp.slice(39, 47)}
      <br />
      Latitude: {lat}
      <br />
      Longitude: {lon}
      <br /> */}
      {/* <p>It looks like your zip is {zip}</p> */}
      <p>Location: {displayLocation}.</p>
      {/* <p>Pollen index for today is {pollenIndex}.</p> */}
      <p>
        Main allergens: {triggerOne}, {triggerTwo}, {triggerThree}.
      </p>
    </div>

    //   <PollenDisplay location={location} state={state} zip={zip} displayLocation={displayLocation} pollenIndex={pollenIndex} triggerOne={triggerOne} triggerTwo={triggerTwo} triggerThree={triggerThree} />
  );
}
