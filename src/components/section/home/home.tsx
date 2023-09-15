import React from "react";

import styles from "./home-styles.module.css";

function Home(): React.ReactElement {
  return (
    <div className={styles.home}>
      <h1 className={styles.focusHeading}>
        Software Engineering and Technical Leadership
      </h1>

      <p className={styles.summary}>
        I&apos;m passionate about building inspiring and maintainable
        experiences with great people.
      </p>

      <ul>
        <li>
          <a href="https://github.com/katrynmc">Github</a>
        </li>
        <li>
          <a href="https://linkedin.com/in/katrynmcintosh">LinkedIn</a>
        </li>
      </ul>
    </div>
  );
}

export default Home;
