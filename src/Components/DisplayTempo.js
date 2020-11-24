import React from "react";
import styles from "./TempoDisplay.module.css";

const DisplayTempo = (props) => (
  <div className={styles.root}>
    <span className={styles.label}>{props.tempo}</span>
  </div>
);

export default DisplayTempo;
