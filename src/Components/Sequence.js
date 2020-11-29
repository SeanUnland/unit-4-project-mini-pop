import React from "react";
import styles from "./Sequence.module.css";
import _ from "lodash";

const Sequence = (props) => (
  <div className={styles.root}>
    {_.map(props.checked[props.row], (isBoxChecked, i) => (
      <div
        onClick={() => {
          props.onToggle(i, props.row);
        }}
        className={_.chain([
          styles.box,
          isBoxChecked && styles.checked,
          props.isActive[props.row][i] && !isBoxChecked && styles.active,
          props.isActive[props.row][i] && isBoxChecked && styles.activechecked,
        ])
          .compact()
          .join(" ")
          .value()}
        key={i}
      />
    ))}
  </div>
);

export default Sequence;
