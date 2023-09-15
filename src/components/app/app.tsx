import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ROUTES } from "app/helpers/routes";

import Home from "app/components/section/home/home";
import Footer from "app/components/page/footer/footer";
import Experience from "app/components/section/experience/experience";
import Header from "app/components/page/header/header";

import styles from "./app-styles.css";

function App(): React.ReactElement {
  return (
    <div className={styles.portfolioSite}>
      <Router>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path={ROUTES.background} element={<Background />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default hot(module)(App);
