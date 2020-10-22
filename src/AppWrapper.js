import React from "react";
import { ThemeProvider } from "emotion-theming";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import appTheme from "./styles/appTheme";
import GlobalStyles from "./styles/GlobalStyles";

const AppWrapper = () => (
  <ThemeProvider theme={appTheme}>
    <React.Fragment>
      <GlobalStyles /> {/* Apply Emotion Global Styles */}
      <Router>
        <App />
      </Router>
    </React.Fragment>
  </ThemeProvider>
);

export default AppWrapper;
