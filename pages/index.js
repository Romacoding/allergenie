import React from "react";
import axios from "axios";
import moment from "moment";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Pollen from "../components/pollen";
import Weather from "../components/weather";
import Pollution from "../components/pollution"
import baseUrl from "../utils/baseUrl";

export default function Home({
  location,
  state,
  zip,
  displayLocation,
  pollenIndex,
  triggerOne,
  triggerTwo,
  triggerThree,
  responseObject,
  weatherData,
  pollutionData
}) {
  const date = (function () {
    return moment().format("dddd, MMMM Do YYYY");
  })();
  // console.log(responseObject);
  // console.log(weatherData);
  // console.log(pollutionData);

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>AllerGenie</title>
          <link rel="icon" href="favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to Allergenie!</h1>
          <div>
            <img
              src="/genie.svg"
              alt="Allergenie Logo"
              className={styles.logo}
            />
          </div>
          <p className={styles.description}>Your daily pollen forecast</p>

          <div className={styles.grid}>
            <Pollen
              date={date}
              location={location}
              state={state}
              zip={zip}
              displayLocation={displayLocation}
              pollenIndex={pollenIndex}
              triggerOne={triggerOne}
              triggerTwo={triggerTwo}
              triggerThree={triggerThree}
            />
            <Weather weatherData={weatherData}
            />
            <Pollution pollutionData={pollutionData}
            />
          </div>

        </main>

        <footer className={styles.footer}>
          Information is provided by
          <a
            href="https://www.pollen.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            &nbsp;Pollen.com
          </a>,
          <a
            href="https://openweathermap.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            &nbsp;OpenWeather
          </a>
          &nbsp;and 
          <a
            href="https://www.airnow.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            &nbsp;AirNow
          </a>.
        </footer>
      </div>
    </>
  );
}

Home.getInitialProps = async (ctx) => {
  const url = `${baseUrl}/api/pollen`;
  // locate IP of a user
  const zip = await axios
    .get("http://ip-api.com/json/?fields=zip")
    .then(function (responseData) {
      return responseData.data.zip;
    }).catch(err => {
      console.log(err);
    });

  const payload = { params: { zip } };
  // fetch data on server
  const response = await axios.get(url, payload);
  // return response data as an object
  return response.data;
  // this object will be merged with existing props
};