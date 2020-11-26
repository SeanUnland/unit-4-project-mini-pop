import React from "react";
import _ from "lodash";
import styles from "./Header.module.css";
import { motion } from "framer-motion";

const Header = (props) => (
  <motion.div
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className={_.chain([styles.root]).compact().join(" ").value()}
  >
    Mini-Pop
  </motion.div>
);

export default Header;
