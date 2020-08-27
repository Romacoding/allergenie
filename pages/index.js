import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Pollen from "../components/pollen";
import baseUrl from "../utils/baseUrl";
import axios from "axios";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function Home({
  location,
  state,
  zip,
  displayLocation,
  pollenIndex,
  triggerOne,
  triggerTwo,
  triggerThree,
}) {
  const date = (function () {
    return new Date().toDateString();
  })();

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>AllerGenie</title>
          {/* <link rel="icon" href="/static/favicon.ico" /> */}
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to Allergenie!</h1>
          <div>
            <img
              src="/static/genie.svg"
              alt="Allergenie Logo"
              className={styles.logo}
            />
          </div>
          <p className={styles.description}>Your daily pollen forecast</p>

          <div className={styles.description}>
            {/* <div className={styles.card}> */}
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
            {/* </div> */}
          </div>
          <div className={styles.grid} style={{ width: 200, height: 200 }}>
            <CircularProgressbar
              value={pollenIndex}
              maxValue={12}
              text={pollenIndex}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0,

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "round",

                // Text size
                textSize: "16px",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: `rgba(217, 30, 24, ${pollenIndex / 10})`,
                textColor: `rgba(217, 30, 24, 1)`,
                trailColor: "#18d91e",
                backgroundColor: "#3e98c7",
              })}
            />
          </div>
        </main>

        <footer className={styles.footer}>
          <div>
            Pollen information is provided by{" "}
            <a
              href="https://www.pollen.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pollen.com
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

Home.getInitialProps = async () => {
  const url = `${baseUrl}/api/pollen`;
  // locate the IP of the user
  const zip = await axios
    .get("http://ip-api.com/json/?fields=zip")
    .then(function (responseData) {
      return responseData.data.zip;
    });
  const payload = { params: { zip } };
  // fetch data on server
  const response = await axios.get(url, payload);
  // return response data as an object
  return response.data;
  // this object will be merged with existing props
};
