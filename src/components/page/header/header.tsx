import React from "react";

import styles from "./header-styles.css";

function Header(): React.ReactElement {
  return (
    <header className={styles.siteHeader}>
      <h2 className={styles.name}>
        KATRYN McINTOSH
      </h2>
    </header>
  );
}

export default Header;
