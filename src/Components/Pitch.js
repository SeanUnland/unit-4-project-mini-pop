import React from "react";
import styles from "./PitchSelect.module.css";
import "./PitchSelect.module.css";
import { motion } from "framer-motion";

const Pitch = (props) => (
  // console.log("pitch props.notes", props.notes),
  <div>
    <motion.select
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.5 }}
      inital={{ opacity: 0 }}
      animate={{ opacity: 1, rotateZ: 360 }}
      name="pitch"
      id="pitch"
      className={styles.select}
      value={props.notes[props.row]}
      onChange={(e) => {
        props.onPitchSelect(e.target.value, props.row);
      }}
    >
      <option value="G5">G5</option>
      <option value="Gb5">Gb5</option>
      <option value="F5">F5</option>
      <option value="E5">E5</option>
      <option value="Eb5">Eb5</option>
      <option value="D5">D5</option>
      <option value="Db5">Db5</option>
      <option value="C5">C5</option>
      <option value="B4">B4</option>
      <option value="Bb4">Bb4</option>
      <option value="A4">A4</option>
      <option value="Ab4">Ab4</option>
      <option value="G4">G4</option>
    </motion.select>
  </div>
);

export default Pitch;
