import React from "react";
import styles from "./SequenceRow.module.css";
import Pitch from "./Pitch";
import Sequence from "./Sequence";

const SequenceRow = (props) => (
  <div className={styles.root}>
    <Pitch
      onPitchSelect={props.onPitchSelect}
      notes={props.notes}
      row={props.row}
    />
    <Sequence
      checked={props.checked}
      row={props.row}
      isActive={props.isActive}
      onToggle={props.onToggle}
    />
  </div>
);

export default SequenceRow;
