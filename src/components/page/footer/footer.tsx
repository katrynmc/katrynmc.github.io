import React from "react";

import styles from "./footer-styles.module.css";

const Footer = (): React.ReactElement => {
  return (
    <footer className={styles.footer}>
      <a className={styles.email} href="mailto:katryn.mcintosh@gmail.com">
        Send me an email
      </a>
    </footer>
  );
};

export default Footer;
