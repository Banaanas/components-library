import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import appTheme from "./styles/appTheme";
import store from "./store/store";
import GlobalStyles from "./styles/GlobalStyles";

const AppWrapper = () => (
  <ThemeProvider theme={appTheme}>
    <Provider store={store}>
      <>
        <GlobalStyles /> {/* Apply Emotion Global Styles */}
        <Router>
          <App />
        </Router>
      </>
    </Provider>
  </ThemeProvider>
);

export default AppWrapper;
