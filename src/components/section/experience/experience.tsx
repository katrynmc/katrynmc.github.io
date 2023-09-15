import React from "react";

import styles from "../section-styles.module.css";

function BackgroundSection(): React.ReactElement {
  return (
    <>
      <h1 className={styles.sectionHeading}>Background</h1>
      <p>
        I graduated from the Rhode Island School of Design (RISD) in 2007 with a
        BFA in Painting. After exploring a variety of colorful industries that
        range from galleries to fashion, I fell in love with software
        engineering. My primary focus over the past 5 years has been UI
        engineering architecture and leadership.
      </p>
    </>
  );
}

export default BackgroundSection;
