import React from "react";
import SequenceRow from "./SequenceRow";
import styles from "./StepSequence.module.css";

const DrumSequence = (props) => (
  <div id="step-sequence" className={styles.root}>
    <SequenceRow
      checked={props.checked}
      onToggle={props.onToggle}
      sequenceLength={props.sequenceLength}
      onPitchSelect={props.onPitchSelect}
      notes={props.notes}
      pitchConversion={props.pitchConversion}
      isActive={props.isActive}
      row="0"
    />
    <SequenceRow
      checked={props.checked}
      onToggle={props.onToggle}
      sequenceLength={props.sequenceLength}
      onPitchSelect={props.onPitchSelect}
      notes={props.notes}
      isActive={props.isActive}
      row="1"
    />
    {/* <SequenceRow
      checked={props.checked}
      onToggle={props.onToggle}
      sequenceLength={props.sequenceLength}
      onPitchSelect={props.onPitchSelect}
      notes={props.notes}
      pitchConversion={props.pitchConversion}
      isActive={props.isActive}
      row="2"
    /> */}
    {/* <SequenceRow
      checked={props.checked}
      onToggle={props.onToggle}
      sequenceLength={props.sequenceLength}
      onPitchSelect={props.onPitchSelect}
      notes={props.notes}
      isActive={props.isActive}
      row="3"
    />
    <SequenceRow
      checked={props.checked}
      onToggle={props.onToggle}
      sequenceLength={props.sequenceLength}
      onPitchSelect={props.onPitchSelect}
      notes={props.notes}
      isActive={props.isActive}
      row="4"
    />
    <SequenceRow
      checked={props.checked}
      onToggle={props.onToggle}
      sequenceLength={props.sequenceLength}
      onPitchSelect={props.onPitchSelect}
      notes={props.notes}
      isActive={props.isActive}
      row="5"
    /> */}
  </div>
);

export default DrumSequence;
