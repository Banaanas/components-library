import React from "react";
import { ThemeProvider } from "emotion-theming";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";

const AppWrapper = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyles /> {/* Apply Emotion Global Styles */}
      <Router>
        <App />
      </Router>
    </React.Fragment>
  </ThemeProvider>
);

export default AppWrapper;
