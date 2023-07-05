import React from "react";

import {
  focusHeading,
  summary,
  home,
} from "./home-styles.css";

function Home(): React.ReactElement {
  return (
    <div className={home}>
      <h1 className={focusHeading}>Software Engineering and Technical Leadership</h1>

      <p className={summary}>
        I&apos;m passionate about building inspiring and maintainable
        experiences with great people.
      </p>
    </div>
  );
}

export default Home;
