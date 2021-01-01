import { Redirect, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import WorkPage from "../pages/WorkPage";
import ContactPage from "../pages/ContactPage";
import CyriloPage from "../pages/CyriloPage";
import VisionPage from "../pages/VisionPage";
import ResumePage from "../pages/ResumePage";

const Routes = () => (
  <AnimatePresence exitBeforeEnter>
    {/* Page Transition - Framer Motion */}
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
  </AnimatePresence>
);

export default Routes;
