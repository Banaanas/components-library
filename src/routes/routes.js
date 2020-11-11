import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import WorkPage from "../pages/Work";
import ContactPage from "../pages/Contact";
import CyriloPage from "../pages/Cyrilo";
import VisionPage from "../pages/Vision";
import ResumePage from "../pages/Resume";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <HomePage />
    </Route>

    <Route path="/about">
      <AboutPage />
    </Route>

    <Route path="/cyrilo">
      <CyriloPage />
    </Route>

    <Route path="/vision">
      <VisionPage />
    </Route>

    <Route path="/resume">
      <ResumePage />
    </Route>

    <Route path="/work">
      <WorkPage />
    </Route>

    <Route path="/contact">
      <ContactPage />
    </Route>

    <Redirect to="/" />
  </Switch>
);

export default Routes;
