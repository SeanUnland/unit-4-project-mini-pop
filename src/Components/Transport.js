import React from "react";
import PlayButton from "./PlayButton";
import TimeSignature from "./TimeSignature";
import Tempo from "./Tempo";
import DisplayTempo from "./DisplayTempo";
import TapTempo from "./TapTempo";
import ResetButton from "./ResetButton";
import styles from "./Transport.module.css";

const Transport = (props) => (
  <div id="buttons" className={styles.root}>
    <div className={styles.wrapperTop}>
      <PlayButton
        isPlaying={props.isPlaying}
        onTogglePlay={props.onTogglePlay}
      />
      <TimeSignature
        sequenceLength={props.sequenceLength}
        onLengthChange={props.onLengthChange}
      />
      <ResetButton onReset={props.onReset} />
    </div>
    <div className={styles.wrapperBottom}>
      <TapTempo handleTap={props.handleTap} />
      <DisplayTempo tempo={props.tempo} />
      <Tempo tempo={props.tempo} onTempoChange={props.onTempoChange} />
    </div>
  </div>
);

export default Transport;
