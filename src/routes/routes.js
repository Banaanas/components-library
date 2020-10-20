import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import WorkPage from "../pages/Work";
import ContactPage from "../pages/Contact";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <HomePage />
    </Route>

    <Route path="/about">
      <AboutPage />
    </Route>

    <Route path="/work">
      <WorkPage />
    </Route>

    <Route path="/contact">
      <ContactPage />{" "}
    </Route>

    <Route render={() => <Redirect to="/" />} />
  </Switch>
);

export default Routes;
