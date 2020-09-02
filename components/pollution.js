import React from "react";
import styles from "../styles/Home.module.css";

export default function Weather({pollutionData}) {
const pollution = pollutionData.map(pollutant => {return <p key={pollutant.ParameterName}>Pollutant: {pollutant.ParameterName} <br/> Air Quality Index: {pollutant.AQI} <br/> Status: {pollutant.Category.Name}</p>})
    return (
        <div className={styles.card}>
            <h3>Air Quality</h3>
            {pollution}
        </div>
    )
};