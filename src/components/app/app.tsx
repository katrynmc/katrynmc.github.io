import React from "react";
import { hot } from "react-hot-loader";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // NavLink,
} from "react-router-dom";

import { ROUTES } from "helpers/routes";

import Home from "src/components/section/home/home";
import Footer from "src/components/page/footer/component";
import EngineeringSection from "src/components/section/engineering/engineering_section";
import Background from "src/components/section/background/background_section";
import Header from "src/components/page/header/component";

import linePainting from "assets/images/knitpaint.png";

function App(): React.ReactElement {
  return (
    <div className="portfolio-site">
      <Router>
        <Header />
        {/* <nav className="navigation">
          <NavLink to={ROUTES.projects} activeClassName="selected">
            Projects
          </NavLink>
          <NavLink to={ROUTES.background} activeClassName="selected">
            Background
          </NavLink>
        </nav> */}
        <div className="painting-left">
          <img alt="" src={linePainting} />
        </div>
        <div className="painting-right">
          <img alt="" src={linePainting} />
        </div>
        <main>
          <Switch>
            <Route path={ROUTES.projects}>
              <EngineeringSection />
            </Route>
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