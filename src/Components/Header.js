import React from "react";
import _ from "lodash";
import styles from "./Header.module.css";

const Header = (props) => (
  <div
    className={_.chain([styles.root, props.landscape && styles.landscape])
      .compact()
      .join(" ")
      .value()}
  >
    Mini-Pop
  </div>
);

export default Header;
