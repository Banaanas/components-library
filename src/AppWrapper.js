import { ThemeProvider } from "@emotion/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import appTheme from "./styles/appTheme";
import GlobalStyles from "./styles/GlobalStyles";

const AppWrapper = () => (
  <ThemeProvider theme={appTheme}>
    <>
      <GlobalStyles /> {/* Apply Emotion Global Styles */}
      <Router>
        <App />
      </Router>
    </>
  </ThemeProvider>
);

export default AppWrapper;
