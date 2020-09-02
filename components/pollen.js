import React from "react";
import styles from "../styles/Home.module.css";
import { Progress } from "antd";

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
  let pollenLevel;
  const pollenIndexNum = Number(pollenIndex);
  if (pollenIndexNum > 9.6) {
    pollenLevel = "High";
  } else if (pollenIndexNum > 7.2) {
    pollenLevel = "Medium High";
  } else if (pollenIndexNum > 4.8) {
    pollenLevel = "Medium";
  } else if (pollenIndexNum > 2.4) {
    pollenLevel = "Low Medium";
  } else {
    pollenLevel = "Low";
  }
  
  const pollenIcon = (
    <img
      src="/pollen_flower.svg"
      alt="Flower Logo"
      className={styles.logosmall}
    />
  );

  return (
    <div>
      <div className={styles.card}>
        <h3>Allergy forecast for {displayLocation}</h3>
        <p>Today is {date}</p>
        <hr />
        <div className={styles.progress}>
          <h3>Allergy Index</h3>
          <Progress
            type="circle"
            width={170}
            strokeColor={{
              0: "#87d068 ",
              100: "#d06887",
            }}
            percent={Math.floor((pollenIndex * 100) / 12)}
            format={(percent) => `${pollenIndex}`}
          />
          <p>{pollenLevel}</p>
        </div>
        <hr />
        <h3>Main allergens</h3>
        <p>
          {pollenIcon} {triggerOne}, {triggerTwo}, {triggerThree}
        </p>
      </div>
    </div>
  );
}