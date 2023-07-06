import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ROUTES } from "helpers/routes";

import Home from "components/section/home/home";
import Footer from "components/page/footer/footer";
import Background from "components/section/background/background";
import Header from "components/page/header/header";

import styles from "./app-styles.css";

function App(): React.ReactElement {
  return (
    <div className={styles.portfolioSite}>
      <Router>
        <Header />
        <main className={styles.main}>
          <Switch>
            <Route path={ROUTES.background}>
              <Background />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default hot(module)(App);
